require('express-async-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const booksRouter = require('./controllers/books');
const usersRouter = require('./controllers/users');
const commentsRouter = require('./controllers/comments');
const bookDetailsRouter = require('./controllers/bookDetails');
const loginRouter = require('./controllers/login');
const middleware = require('./utils/middleware');


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
// app.use(middleware.unknownEndpoint);
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(middleware.errorHandler);

module.exports = app;