require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Book = require('./models/book');

const app = express();
app.use(cors());
app.use(express.static('build'));
app.use(express.json());


app.get('/api/books', (req, res) => {
  Book.find({}).then(books => {
    res.json(books);
  });
});

app.get('/api/books/:id', (req, res, next) => {
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

app.post('/api/books', (req, res) => {
  const body = req.body;
  if (body === undefined) {
    return res.status(400).json({ error: 'missing' });
  }
  const newBook = new Book({
    title: body.title,
    author: body.author,
    about: body.about,
    available: 'on shelf'
  });

  newBook.save().then(savedBook => {
    res.json(savedBook);
  });
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

// handler of requests with unknown endpoint
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

app.use(errorHandler);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});