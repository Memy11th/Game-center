import mongoose from "mongoose";

let cached = (global as any).mongoose || { conn: null, promise: null };

const connect = async (): Promise<mongoose.Connection> => {
  // If connection already exists, return the cached connection.
  if (cached.conn) {
    return cached.conn;
  }

  // Check if the MongoDB URL is available in the environment variables.
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URL is not defined in environment variables.");
  }

  // If there’s no cached promise, initiate the connection.
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGODB_URI, {
        dbName: "Memy11th",  // You can change this if needed.
        bufferCommands: false, // Disable buffering to avoid issues with connections.
        useNewUrlParser: true, // Use the new MongoDB URI parser.
        useUnifiedTopology: true, // Use the new Server Discovery and Monitoring engine.
      })
      .then((mongoose) => {
        console.log("DB connected successfully!");
        return mongoose.connection;  // Return the connection object
      })
      .catch((err) => {
        console.error("Database connection failed:", err); // Log detailed error
        throw err;  // Re-throw the error for better handling upstream
      });
  }

  // Wait for the connection promise to resolve and return the connection.
  cached.conn = await cached.promise;
  return cached.conn;
};

export default connect;
