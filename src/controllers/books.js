const booksRouter = require('express').Router();
const Book = require('../models/book');

booksRouter.get('/', async (req, res, next) => {
  const books = await Book.find({}).populate('bookDetail').catch(error => next(error));

  res.json(books);
});

booksRouter.get('/:id', (req, res, next) => {
  Book.findById(req.params.id).then(book => {
    if (book) {
      res.json(book);
    } else {
      res.status(404).end();
    }
  })
    .catch(error => {
      next(error);
    });
});

booksRouter.post('/', async (req, res, next) => {
  const body = req.body;
  if (body === undefined) {
    return res.status(400).json({ error: 'missing' });
  }
  const newBook = new Book({
    title: body.title,
    author: body.author,
    about: body.about
  });

  const savedBook = await newBook.save().catch(error => next(error));

  res.json(savedBook);
});

module.exports = booksRouter;