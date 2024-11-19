import mongoose from "mongoose";
let cached = (global as any).mongoose || { conn: null, promise: null };
 const connect = async () => {
    if (cached.conn) return cached.conn;
  
    if (!cached.promise) {
      cached.promise = mongoose
        .connect(process.env.MONGO_URI!, {
          dbName: "Memy11th",
          bufferCommands: false,
          serverSelectionTimeoutMS: 5000, // Timeout for finding a server
          socketTimeoutMS: 45000, // Timeout for establishing a socket
        })
        .then((mongooseInstance) => {
          console.log("DB connected successfully!");
          return mongooseInstance;
        })
        .catch((err) => {
          console.error("DB connection error:", err);
          cached.promise = null; // Reset promise on failure
          throw err;
        });
    }
  
    cached.conn = await cached.promise;
    return cached.conn;
  };

  export default connect;
  