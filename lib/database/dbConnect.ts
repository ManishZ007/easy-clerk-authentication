import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to databse");
  }

  try {
    if (!process.env.MONGODB_URL) {
      console.log("MONGODB_URL key is missing");
    }

    const db = await mongoose.connect(process.env.MONGODB_URL!);

    connection.isConnected = db.connections[0].readyState;

    console.log("DB connected successfully");
  } catch (error) {
    console.log("Database connection faild", error);
    process.exit();
  }
}

export default dbConnect;
