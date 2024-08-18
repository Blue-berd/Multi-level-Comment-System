import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose"

export const mongooseConnection = async function () {
  const uri = process.env.MONGODB_URI;
  try {
    await mongoose.connect(uri);
    const db = mongoose.connection.db;
    console.log('Connected to MongoDB using Mongoose');
  } catch (err) {
    console.error('Failed to connect to MongoDB using Mongoose', err);
    throw err;
  }
}

