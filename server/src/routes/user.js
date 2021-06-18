const express = require("express");
const userController = require("../controllers/user");
const userValidation = require("../middelware/validation/user");
const router = express.Router();

router.post("/login", userValidation.validate("LOGIN"), userController.login);

router.post(
  "/signup",
  userValidation.validate("SIGNUP"),
  userController.signup
);

module.exports = router;
