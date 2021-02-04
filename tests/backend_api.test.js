const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const supertest = require('supertest');
const app = require('../src/app');

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
  console.log(response.body);
  const titles = response.body.map(r => r.title);
  expect(titles).toContain('testbook');
});