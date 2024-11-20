import mongoose from 'mongoose';

const cached = global.mongoose || { conn: null, promise: null };

const connect = async () => {
  // If the connection already exists, use the cached connection
  if (cached.conn) return cached.conn;

  // If there's no cached connection, establish a new one
  if (!cached.promise) {
    cached.promise =await  mongoose.connect(process.env.MONGO_URI, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 30000, // 30 seconds
    })
    .then((conn) => {
      console.log("DB connected successfully!");
      return conn;
    })
    .catch((err) => {
      console.error("DB connection failed:", err.message);
      throw err;
    });
  }

  // Await the promise to ensure the connection is established before returning
  cached.conn = await cached.promise;
  return cached.conn;
};

export default connect;
