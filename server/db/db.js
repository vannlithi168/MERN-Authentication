import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DEV_MONGO_URI);
    console.log("connect to db");
  } catch (error) {
    console.log("Can't connect to DB");
  }
};

export default connectDB;
