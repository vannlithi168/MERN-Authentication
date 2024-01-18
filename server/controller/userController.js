const User = require("../models/usersModel");

const registerUser = async (req, res) => {
  console.log("Request Body:", { ...req.body });
  try {
    const newUser = new User({
      ...req.body,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  registerUser,
};
