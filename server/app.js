const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const connectDB = require("./db/db.js");
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// Middleware for parsing JSON requests
app.use(express.json());

// CORS configuration
app.use(
  cors({
    origin: "*",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
  })
);

// Use the userRoute
app.use("/api/user", userRoute);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle unhandledRejection error
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(() => {
    process.exit(1);
  });
});
