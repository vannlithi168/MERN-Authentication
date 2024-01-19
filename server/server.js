const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/db.js");

dotenv.config();
const app = express();
const PORT = 3000;

// handle uncaugt exception error
process.on("uncaughtException", () => {
  process.exit(1);
});

connectDB();

app.listen(PORT, () => {
  console.log(`server running on port ${PORT} `);
});

// handle unhandleRejection error
process.on("unhandledRejection", () => {
  server.close(() => {
    process.exit(1);
  });
});
