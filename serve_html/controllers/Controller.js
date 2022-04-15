const Pagesw = require('../models/book');
const httpStatus = require("http-status-codes");
module.exports = {
  Home: (req, res) => {
    Pagesw.find().lean().then((books) => {
      res.render('home', { books });
    }).catch(() => {
      res.status(httpStatus.NOT_ACCEPTABLE).send("Error");
    })
  },
  BPage: (req, res) => {
    Pagesw.findOne({ bookNumber: req.params.bookNumber }).lean().then((book) => {
      res.render('books', { book: book });
    }).catch(() => {
      res.status(httpStatus.NOT_FOUND).send("Error");
    })
  },
};
