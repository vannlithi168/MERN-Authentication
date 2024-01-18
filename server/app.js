// app.js
const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const connectDB = require("./db/db.js");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
// Middleware for parsing JSON requests
app.use(express.json());

// Use the userRoute
app.use("/api/user", userRoute);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// handle unhandledRejection error
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(() => {
    process.exit(1);
  });
});
