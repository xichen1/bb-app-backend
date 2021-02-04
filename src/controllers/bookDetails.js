const bookDetailsRouter = require('express').Router();
const BookDetail = require('../models/bookDetail');
const Book = require('../models/book');

bookDetailsRouter.get('/', async (req, res) => {
  const bookDetails = await BookDetail.find({}).populate('comments');
  res.json(bookDetails);
});

bookDetailsRouter.get('/:id', (req, res) => {
  BookDetail.findById(req.params.id).then(book => {
    if (book) {
      res.json(book);
    } else {
      res.status(404).end();
    }
  });

});

bookDetailsRouter.post('/', async (req, res) => {
  const body = req.body;
  if (body === undefined) {
    return res.status(400).json({ error: 'missing' });
  }
  const book = await Book.findById(body.book);

  const newBookDetail = new BookDetail({
    title: body.title,
    author: body.author,
    about: body.about,
    book: book._id
  });

  const savedBookDetail = await newBookDetail.save();
  book.bookDetail = savedBookDetail._id;
  await book.save();

  res.json(savedBookDetail);
});

bookDetailsRouter.put('/:id', async (req, res) => {
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

  res.json(updatedBookDetail);
});

module.exports = bookDetailsRouter;