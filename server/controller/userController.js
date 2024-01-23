const User = require("../models/usersModel");

const registerUser = async (req, res) => {
  try {
    const newUser = new User({ ...req.body });
    await newUser.save();
    console.log("User registered successfully:", newUser);
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      console.error("Invalid credentials for user:", email);
      return res.status(401).json({ error: "Invalid credentials" });
    }

    console.log("Login successful for user:", email);
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
