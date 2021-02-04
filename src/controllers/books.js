const booksRouter = require('express').Router();
const Book = require('../models/book');
const BookDetail = require('../models/bookDetail');

booksRouter.get('/', async (req, res) => {
  const books = await Book.find({}).populate('bookDetail');

  res.json(books);
});

booksRouter.get('/:id', (req, res) => {
  Book.findById(req.params.id).then(book => {
    if (book) {
      res.json(book);
    } else {
      res.status(404).end();
    }
  });
});

booksRouter.post('/', async (req, res) => {
  const body = req.body;
  if (body === undefined) {
    return res.status(400).json({ error: 'missing' });
  }
  const newBook = new Book({
    title: body.title,
    author: body.author,
    about: body.about
  });

  const savedBook = await newBook.save();

  // save new book detail by the id of new saved book
  const newBookDetail = new BookDetail({
    title: savedBook.title,
    author: savedBook.author,
    about: savedBook.about,
    book: savedBook._id
  });

  const savedBookDetail = await newBookDetail.save();
  savedBook.bookDetail = savedBookDetail._id;
  await savedBook.save();

  res.json(savedBook);
});

module.exports = booksRouter;