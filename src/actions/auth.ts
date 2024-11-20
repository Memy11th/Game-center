'use server'
import User from "../models/user";
import connect from "./connect";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_EXPIRES = 90 * 60;

// Token Generation
const generateToken = async ({ id }: { id: any }) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!!, {
    expiresIn: JWT_EXPIRES,
  });
};

// Signup Function
export const signup = async (data: any) => {
  try {
    await connect(); // Ensure the DB connection is established
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await User.create({ ...data, password: hashedPassword });
    return { success: "User created successfully" };
  } catch (error: any) {
    console.error("Error during user creation:", error);
    return { error: "User creation failed", details: error.message };
  }
};

// Login Function
export const login = async (data: { email: string; password: string }) => {
  try {
    await connect(); // Ensure the DB connection is established
    const cookie = await cookies();
    
    // Check if user exists
    const user = await User.findOne({ email: data.email }).select("+password");
    if (!user) {
      return { error: "User not found" };
    }
    
    // Validate password
    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
      return { error: "Incorrect email or password" }; // Do not specify if it's the email or password
    }

    // Generate JWT token
    const token = await generateToken({ id: user._id });

    // Set cookie with the token
    cookie.set("token", token, {
      httpOnly: true,
      maxAge: JWT_EXPIRES,
      sameSite: "none",
      path: "/",
      secure: true,
    });

    // Send user data along with success message
    const userObj = JSON.parse(JSON.stringify(user));
    return { success: "Login successful", data: userObj };
  } catch (error: any) {
    console.error("Login failed:", error);
    return { error: "Login failed", details: error.message };
  }
};

// Protect Function to verify JWT token
export const protect = async () => {
  try {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;
    if (!token) {
      return { error: "You are not authorized to perform this action" };
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    if (!decoded) {
      return { error: "You are not authorized to perform this action" };
    }

    return { decode: decoded };
  } catch (error) {
    console.error("Error verifying token:", error);
    return { error: "Invalid or expired token" };
  }
};

// Get User Data after JWT verification
export const getUser = async () => {
  try {
    await connect(); // Ensure DB connection
    const { decode } = await protect();
    if (decode.error) {
      return { error: decode.error };
    }

    const user = await User.findById((decode as any).id);
    if (!user) {
      return { error: "User not found" };
    }

    const userObj = JSON.parse(JSON.stringify(user));
    return { data: userObj };
  } catch (error) {
    console.error("Error fetching user:", error);
    return { error: "You are not authorized to perform this action" };
  }
};

// Logout Function
export const logout = async () => {
  try {
    await cookies().delete("token");
    return { success: "Logout successful" };
  } catch (error) {
    console.error("Error during logout:", error);
    return { error: "Logout failed" };
  }
};
