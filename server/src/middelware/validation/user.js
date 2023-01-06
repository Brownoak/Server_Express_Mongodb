const { body, param } = require("express-validator");
const ObjectId = require('mongoose').Types.ObjectId;

/**
 *
 * @param {String} type
 * LOGIN | SIGNUP
 */
exports.validate = (type) => {
  switch (type) {
    case "LOGIN":

      return [
        body("email").isEmail().withMessage("Invalid email address"),
        body("password").not().isEmpty().withMessage("Password is required"),
      ];
    case "SIGNUP":
      return [
        body("firstName").not().isEmpty().withMessage("First Name is required"),
        body("lastName").not().isEmpty().withMessage("Last Name is required"),
        body("email").isEmail().withMessage("Invalid email address"),
        body("password").not().isEmpty().withMessage("Password is required"),
      ];

      case "UPDATE":
      return [ param("id")
      .not()
      .isEmpty() 
      .withMessage("Invalid user ID"),

    body("firstName")
      .not()
      .isEmpty()
      .withMessage("first name can not be empty"),
    body("lastName")
      .not()
      .isEmpty()
      .withMessage("Last name can not be empty"),
    body("email")
      .isEmail()
      .withMessage("Invalid email"),
    body("password")
      .not()
      .isEmpty()
      .withMessage("password required"),
      ];

      case "DELETE":
      return [
        param("id")
          .not()
          .isEmpty() 
          .withMessage("Invalid user ID"),
      ];
    default:
      return [];
  }
};
