const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, require: [true, "username is required."] },
    email: {
      type: String,
      require: [true, "email is required"],
      unique: true,
      validate: {
        validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: "Invalid email format.",
      },
    },
    phoneNumber: {
      type: Number,
      unique: true,
      validate: {
        validator: function (value) {
          return /^\d+$/.test(value);
        },
        message: "Phone number can only contain numeric characters.",
      },
    },

    address: {
      type: String,
      required: [true, "Address is required."],
    },

    birthDate: {
      type: Date,
      required: [true, "Birth date is required."],
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: [true, "Gender is required."],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: (value) => {
          return validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          });
        },
        message: "Password must be strong and secure",
      },
    },
    confirmPassword: {
      type: String,
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Passwords do not match.",
      },
    },
    verified: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 12);

  this.password = hashedPassword;

  // Delete confirmPassword field
  this.confirmPassword = undefined;

  next();
});

// Define a method to compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const User = mongoose.model("User", userSchema);

module.exports = User;
