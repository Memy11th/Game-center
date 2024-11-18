"use server";
import User from "../models/user";
import { protect } from "./auth";

export const removeFromWishList = async (gameId: string) => {
  try {
    const { decode } = await protect();
    console.log(decode);
    const user = await User.findById((decode as any).id);
    if (!user) return { error: "User not found" };
    user.wishlist = user.wishlist.filter((id: string) => id !== gameId);
    await user.save();
    return { success: "Game removed from wishlist" };
  } catch (error) {
    return { error: "add to wishlist failed" };
  }
};

export const addToWishList = async (gameId: string) => {
  try {
    const { decode } = await protect();
    const user = await User.findById((decode as any).id);
    if (!user) return { error: "User not found" };
    //array.filter().push()
    user.wishlist = user.wishlist?.filter((wish: string) => wish !== gameId) || [];
    user.wishlist.push(gameId);
    await user.save();
    return { success: "Game added to wishlist" };
  } catch (error) {
    console.error(error);
    return { error: "add to wishlist failed" };
  }
};