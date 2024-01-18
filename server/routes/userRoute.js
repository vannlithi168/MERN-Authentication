const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.route("/register").post(userController.registerUser);

module.exports = router;
