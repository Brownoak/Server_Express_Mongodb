const express = require("express");
const bookController = require("../controllers/book");
const bookValidation = require("../middelware/validation/book");
const { verifyUser } = require("../middelware/auth");

const router = express.Router();


router
  .route("/")
  .get(
    verifyUser,
    bookController.getAllBooks)
  .post(
    
    bookValidation.validate("CREATE"),
    bookController.createBook
  );


router
  .route("/:id")
  .get(
    verifyUser,
    bookValidation.validate("GET"), 
    bookController.getBook)
  .patch(
    
    bookValidation.validate("UPDATE"),
    bookController.updateBook
  )
  .delete(
    
    bookValidation.validate("DELETE"),
    bookController.deleteBook 
  );   

module.exports = router;
