require('express-async-errors');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const booksRouter = require('./controllers/books');
const usersRouter = require('./controllers/users');
const commentsRouter = require('./controllers/comments');
const bookDetailsRouter = require('./controllers/bookDetails');
const loginRouter = require('./controllers/login');
const config = require('./utils/config');
const middleware = require('./utils/middleware');


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB' + result);
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });


const app = express();
app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/users', usersRouter);

app.use('/api/books', booksRouter);

app.use('/api/comments', commentsRouter);

app.use('/api/bookdetails', bookDetailsRouter);

app.use('/api/login', loginRouter);

// handler of requests with unknown endpoint
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;