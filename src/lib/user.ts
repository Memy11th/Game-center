import mongoose, { Schema, Document } from "mongoose";

// If you use an image schema for avatars, you can uncomment this part.
// const imageSchema = new Schema({
//     secure_url: { type: String, required: true },
//     public_id: { type: String, required: true },
// });

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    wishlist: string[];
    topTenList: string[];
    gamesRating: mongoose.Types.ObjectId[];
    bio: string;
    createdAt: Date;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, select: false, required: true },
    // avatar: imageSchema, // If you need to handle avatars
    wishlist: [{ type: String }],
    topTenList: [{ type: String, max: 10 }],
    gamesRating: [{ type: Schema.Types.ObjectId, ref: "GameReview" }],
    bio: { type: String, max: 500, default: "No bio" },
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
