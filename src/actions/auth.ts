"use server";
import User from "../models/user";
import connect from "./connect";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
const JWT_EXPIRES = 90 * 60;
const generateToken = async ({ id }: { id: any }) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!!, {
    expiresIn: JWT_EXPIRES,
  });
};
export const signup = async (data: any) => {
    try {
      await connect();
  
      // Check if user already exists
      const existingUser = await User.findOne({ email: data.email });
      if (existingUser) {
        return { error: "User already exists with this email." };
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(data.password, 10);
  
      // Create the user
      const user = await User.create({ ...data, password: hashedPassword });
      return { success: "User created successfully" };
    } catch (error: any) {
      console.error("User creation failed:", error);
      return { error: "User creation failed", details: error.message };
    }
  };
  
export const login = async (data: { email: string; password: string }) => {
  try {
    await connect();
    const cookie = await cookies();
    console.log(data);
    const user = await User.findOne({ email: data.email }).select("+password");
    console.log(user);
    if (!user) {
      return { error: "User not found" };
    }
    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
      return { error: "Incorrect email or password !" }; //not make them know if it is the password or email
    }
    const userObj = JSON.parse(JSON.stringify(user));
    const token = await generateToken({ id: user._id });
    console.log(token);
    cookie.set("token", token, {
      httpOnly: true,
      maxAge: JWT_EXPIRES,
      sameSite: "none",
      path: "/",
      secure: true,
    });

    return { success: "Login successful", data: userObj };
  } catch (error: any) {
    console.log(error);
    return { error: "Login failed", details: error.message };
  }
};
// review game update
export const protect = async () => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  if (!token) return { error: "you are not authorized to preform this action"! };
  let decode;
  decode = jwt.verify(token, process.env.JWT_SECRET!!);
  if (!decode) return { error: "you are not authorized to preform this action"! };
  return { decode };
};
export const getUser = async () => {
  try {
    connect();
    const { decode } = await protect();
    const user = await User.findById((decode as any).id);
    if (!user) return { error: "you are not authorized to preform this action"! };
    const userObj = JSON.parse(JSON.stringify(user));
    return { data: userObj };
  } catch (error) {
    return { error: "you are not authorized to preform this action"! };
  }
};
export const logout = async () => {
  try {
    (await cookies()).delete("token");
    return { success: "Logout successful" };
  } catch (error) {
    return { error: "Logout failed" };
  }
};