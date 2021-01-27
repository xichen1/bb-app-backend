const commentsRouter = require('express').Router();
const BookDetail = require('../models/bookDetail');
const Comment = require('../models/comment');
const User = require('../models/user');

commentsRouter.get('/', (req, res) => {
  Comment.find({}).then(comments => {
    res.json(comments);
  });
});

commentsRouter.get('/:id', (req, res, next) => {
  Comment.findById(req.params.id).then(comment => {
    if (comment) {
      res.json(comment);
    } else {
      res.status(404).end();
    }
  })
    .catch(error => {
      next(error);
    });
});

commentsRouter.post('/', async (req, res, next) => {
  const body = req.body;
  if (body === undefined) {
    return res.status(400).json({ error: 'missing' });
  }

  const user = await User.findById(body.userId);
  const bookDetail = await BookDetail.findById(body.bookDetailId);

  const newComment = new Comment({
    content: body.content,
    user: user._id,
    bookDetail: bookDetail._id
  });

  const savedComment = await newComment.save().catch(error => next(error));
  user.comments = user.comments.concat(savedComment._id);
  bookDetail.comments = bookDetail.comments.concat(savedComment._id);
  await user.save().catch(error => next(error));
  await bookDetail.save().catch(error => next(error));
  res.json(savedComment);
});

commentsRouter.put('/:id', async (req, res, next) => {
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

  const updatedBookDetail = await Comment.findByIdAndUpdate(req.params.id, book, { new: true });

  res.json(updatedBookDetail).catch(error => next(error));
});

module.exports = commentsRouter;