const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DEV_MONGO_URI);
    console.log("connect to db");
  } catch (error) {
    console.log("Can't connect to DB");
  }
};

module.exports = connectDB;
