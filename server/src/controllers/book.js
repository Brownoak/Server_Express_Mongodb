const Book = require("../models/book");
const { validationResult } = require("express-validator");

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getAllBooks = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: "error",
        message: errors.array()[0].msg,
      });
    }
    const page =  1;
    const limit = 10;
    const result = await Book.paginate(

      
      {
        page,
        limit,
        sort: "-createdAt",
      }
    );
    res.status(200).json({
      status: "success",
      name: result
      
    });
  } catch (err) {
    res.json({
      err: "couldn't get all books"
    })
  }
};

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getBook = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: "error",
        message: errors.array()[0].msg,
      });
    }
    const book = await Book.findById(req.params.id)
    if (!book) {
      res.status(404).json({
        status: "error",
        message: "Book with this ID does not exist",
      });
    }
    res.status(200).json({
      status: "success",
      book,
    });
  } catch (err) {
    res.json({
      err: "failed to get book"
    })
  }
};

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.createBook = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: "error",
        message: errors.array()[0].msg,
      });
    }
    const book = await Book.create({
      ...req.body,
    });
    res.status(201).json({
      status: "success",
      book,
    });
  } catch (err) {
    res.json({
      err: "failed to create book"
    })
  }
};

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.updateBook = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: "error",
        message: errors.array()[0].msg,
      });
    }
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      res.status(404).json({
        status: "error",
        message: "Book with this ID does not exist",
      });
    }
    res.status(200).json({
      status: "success",
      book,
    });
  } catch (err) {
    res.json({
      err: "failed to update book"
    })
  }
};

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.deleteBook = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: "error",
        message: errors.array()[0].msg,
      });
    }
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      res.status(404).json({
        status: "error",
        message: "Book with this ID does not exist",
      });
    }
    res.status(204).json({
      status: "success",
      book: null,
    });
  } catch (err) {
    res.json({
      err: "failed to deleted book"
    })
  }
};
