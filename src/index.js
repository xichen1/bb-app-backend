require('dotenv').config();
const express = require('express');
const cors = require('cors');
const booksRouter = require('./controllers/books');
const usersRouter = require('./controllers/users');
const commentsRouter = require('./controllers/comments');
const bookDetailsRouter = require('./controllers/bookDetails');
const loginRouter = require('./controllers/login');

const app = express();
app.use(cors());
app.use(express.static('build'));
app.use(express.json());

app.use('/api/users', usersRouter);

app.use('/api/books', booksRouter);

app.use('/api/comments', commentsRouter);

app.use('/api/bookdetails', bookDetailsRouter);

app.use('/api/login', loginRouter);
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
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({ error: 'invalid token' });
  }

  next(error);
};

app.use(errorHandler);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});