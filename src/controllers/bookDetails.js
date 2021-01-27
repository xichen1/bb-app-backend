const bookDetailsRouter = require('express').Router();
const BookDetail = require('../models/bookDetail');
const Book = require('../models/book');

bookDetailsRouter.get('/', (req, res) => {
  BookDetail.find({}).then(books => {
    res.json(books);
  });
});

bookDetailsRouter.get('/:id', (req, res, next) => {
  BookDetail.findById(req.params.id).then(book => {
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

bookDetailsRouter.post('/', async (req, res, next) => {
  const body = req.body;
  if (body === undefined) {
    return res.status(400).json({ error: 'missing' });
  }
  const book = await Book.findById(body.book);

  const newBook = new BookDetail({
    title: body.title,
    author: body.author,
    about: body.about,
    book: book._id
  });

  const savedBook = await newBook.save().catch(error => next(error));
  book.bookDetail = savedBook._id;
  await book.save().catch(error => next(error));

  res.json(savedBook);
});

bookDetailsRouter.put('/:id', async (req, res, next) => {
  const body = req.body;
  if (body === undefined) {
    return res.status(400).json({ error: 'missing' });
  }

  const book = {
    title: body.title,
    author: body.comment,
    about: body.about,
    comment: body.comment
  };

  const updatedBookDetail = await BookDetail.findByIdAndUpdate(req.params.id, book, { new: true });

  res.json(updatedBookDetail).catch(error => next(error));
});

module.exports = bookDetailsRouter;