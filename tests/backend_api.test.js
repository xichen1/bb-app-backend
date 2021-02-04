require('dotenv').config();
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const supertest = require('supertest');
const app = require('../src/app');
const Book = require('../src/models/book');
const BookDetail = require('../src/models/bookDetail');
const Comment = require('../src/models/comment');
const User = require('../src/models/user');

const mongodb = new MongoMemoryServer();

const api = supertest(app);

beforeAll(async () => {
  const uri = await mongodb.getUri();
  const mongooseOpts = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true };
  await mongoose.connect(uri, mongooseOpts);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongodb.stop();
});

beforeEach(async () => {
  await Book.deleteMany({});
  await BookDetail.deleteMany({});
  await Comment.deleteMany({});
  await User.deleteMany({});
});

test('books are returned as json', async () => {
  await api
    .get('/api/books')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('book can be posted', async () => {
  const book = {
    title: 'testbook',
    author: 'testauthor',
    about: 'testabout'
  };

  await api.post('/api/books')
    .send(book)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const response = await api.get('/api/books');
  const titles = response.body.map(r => r.title);
  expect(titles).toContain('testbook');
});

test('bookdetail will also be added when new book is added', async () => {
  const book = {
    title: 'testbook',
    author: 'testauthor',
    about: 'testabout'
  };

  await api
    .post('/api/books')
    .send(book)
    .expect(200);

  const bookresponse = await Book.findOne({ title: 'testbook' });
  const bookdetail = await BookDetail.findOne({ book: bookresponse._id });
  expect(bookdetail.title).toEqual('testbook');
});

test('book with no content cannot be added', async () => {
  const book = {
    author: 'no title',
    about: 'no title'
  };

  await api
    .post('/api/books')
    .send(book)
    .expect(400);

  const response = await api.get('/api/books');
  expect(response.body).toHaveLength(0);
});

describe('tests for user, ', () => {

  test('a valid user can be created', async () => {
    const user = {
      username: 'testuser',
      password: '123456',
      name: 'test'
    };

    await api
      .post('/api/users')
      .send(user)
      .expect(200);
  });

  test('user with no username/password cannot be created', async () => {
    const noPasswordUser = {
      username: 'no password',
      name: 'no pass'
    };

    await api
      .post('/api/users')
      .send(noPasswordUser)
      .expect(400);


    const noUsernameUser = {
      password: 'no username',
      name: 'no uname'
    };

    await api
      .post('/api/users')
      .send(noUsernameUser)
      .expect(400);
  });
});

describe('tests for sign in', () => {
  test('a signup user can sign in', async () => {
    const user = {
      username: 'testUser',
      password: '123456',
      name: 'testUserName'
    };

    await api
      .post('/api/users')
      .send(user)
      .expect(200);

    const auth = {
      username: 'testUser',
      password: '123456'
    };

    const signinUser = await api.post('/api/login').send(auth).expect(200);
    expect(signinUser.body.name).toEqual('testUserName');
  });

  test('user with wrong password cannot sign in', async () => {
    const user = {
      username: 'testUser',
      password: '123456',
      name: 'testUserName'
    };

    await api
      .post('/api/users')
      .send(user)
      .expect(200);

    const wrongAuth = {
      username: 'testUser',
      password: 'abc123456'
    };

    await api.post('/api/login').send(wrongAuth).expect(401);
  });
});

describe('tests for comments', () => {
  test('a comment can be added', async () => {
    const user = {
      username: 'testUser',
      password: '123456',
      name: 'testUserName'
    };

    await api
      .post('/api/users')
      .send(user)
      .expect(200);

    const book = {
      title: 'testbook',
      author: 'testauthor',
      about: 'testabout'
    };

    await api
      .post('/api/books')
      .send(book)
      .expect(200);

    const bookDetail = await Book.findOne({ title: 'testbook' });
    console.log(bookDetail);
    expect(bookDetail.bookDetail).toEqual(expect.anything());

    const auth = {
      username: 'testUser',
      password: '123456'
    };

    const signinUser = await api.post('/api/login').send(auth);
    const token = `bearer ${signinUser.body.token}`;

    const comment = {
      content: 'comment test',
      bookDetailId: bookDetail.bookDetail
    };

    await api
      .post('/api/comments')
      .send(comment)
      .set('authorization', token)
      .expect(200);

    const response = await api.get('/api/bookdetails');
    const comments = response.body.map(bd => bd.comments);
    expect(comments[0][0].content).toEqual('comment test');
  });
});