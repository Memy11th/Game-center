"use server";
import User from "@/lib/user";
import connect from "./connect";
import bcrypt from "bcryptjs";  // Use bcryptjs as it’s more lightweight
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_EXPIRES = 90 * 60; // Expiration time for JWT

// Function to generate a token
const generateToken = async ({ id }: { id: string }) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: JWT_EXPIRES,
  });
};

// Signup function
export const signup = async (data: { name: string; email: string; password: string }) => {
  try {
    await connect(); // Ensure the database connection is established
    const hashedPassword = await bcrypt.hash(data.password, 10); // Hash the password
    const user = await User.create({ ...data, password: hashedPassword }); // Create user
    return { success: "User created successfully" };
  } catch (error: any) {
    console.error(error);
    return { error: "User creation failed", details: error.message };
  }
};

// Login function
export const login = async (data: { email: string; password: string }) => {
  try {
    await connect();
    const cookie = await cookies();
    const user = await User.findOne({ email: data.email }).select("+password");

    if (!user) {
      return { error: "User not found" };
    }

    // Check password
    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
      return { error: "Incorrect email or password" }; // Do not specify which field is incorrect
    }

    const userObj = JSON.parse(JSON.stringify(user)); // Convert to plain object
    const token = await generateToken({ id: user._id });

    // Set token in cookies with proper settings for security
    cookie.set("token", token, {
      httpOnly: true,
      maxAge: JWT_EXPIRES * 1000, // Convert to milliseconds
      sameSite: "none", // SameSite for cross-site requests
      path: "/",
      secure: process.env.NODE_ENV === "production", // Set secure cookies in production only
    });

    return { success: "Login successful", data: userObj };
  } catch (error: any) {
    console.log(error);
    return { error: "Login failed", details: error.message };
  }
};

// Protect function to verify JWT token
export const protect = async () => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token) return { error: "You are not authorized to perform this action" };

  let decode;
  try {
    decode = jwt.verify(token, process.env.JWT_SECRET!);
  } catch (error) {
    return { error: "Invalid or expired token" };
  }

  return { decode };
};

// Get user function based on token
export const getUser = async () => {
  try {
    await connect();
    const { decode } = await protect(); // Get the decoded token
    const user = await User.findById((decode as any).id); // Find user by ID

    if (!user) return { error: "User not found or unauthorized" };

    const userObj = JSON.parse(JSON.stringify(user));
    return { data: userObj };
  } catch (error: any) {
    return { error: "Error retrieving user data", details: error.message };
  }
};

// Logout function to clear the token
export const logout = async () => {
  try {
    (await cookies()).delete("token");
    return { success: "Logout successful" };
  } catch (error: any) {
    return { error: "Logout failed", details: error.message };
  }
};
