import mongoose from 'mongoose';

const connect = async () => {
  try {
    // Ensure you're using the new connection method
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: 'your_database_name', // Optionally add dbName
      autoIndex: false, // Example option; check if needed
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
};

export default connect;
