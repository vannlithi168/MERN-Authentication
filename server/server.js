import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config();
const app = express();
const PORT = 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`server running on port ${PORT} `);
});
