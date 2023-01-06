const express = require("express");
const userController = require("../controllers/user");
const userValidation = require("../middelware/validation/user");
const { verifyUser } = require("../middelware/auth");

const router = express.Router();


router.post("/login", userValidation.validate("LOGIN"), userController.login);

router.post(
  "/signup",
  userValidation.validate("SIGNUP"),
  userController.signup
);

router.get("/search", 
//verifyUser, 
userController.serachUser);
router.delete("/delete/(:id)", userValidation.validate("DELETE"), userController.deleteUser )
router.patch("/:id", userValidation.validate("UPDATE"),userController.update);

module.exports = router;
