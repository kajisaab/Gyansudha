const express = require("express");
const { body } = require("express-validator");

const User = require("../models/user");

const authController = require("../Controller/auth");

const router = express.Router();

router.put(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email")
      .custom(async (value, { req }) => {
        const userDoc = await User.findOne({ email: value });
        if (userDoc) {
          return Promise.reject("E-mail address already exists");
        }
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 6 }),
  ],
  authController.signup
);

router.post("/login", authController.login);

module.exports = router;
