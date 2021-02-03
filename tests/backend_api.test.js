const mongoose = require('mongoose');
const test_helper = require('./test_helper');
const Book = require('../src/models/book');
// const supertest = require('supertest');
// const app = require('../src/app');


beforeAll(async () => {
  const uri = await mongodb.getUri();
  const mongooseOpts = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true };
  await mongoose.connect(uri, mongooseOpts);
});

afterEach(async () => await test_helper.clearDatabase());

afterAll(async () => await test_helper.closeDatabase());

test('books are returned as json', async () => {
  const count = await Book.count();
  expect(count).toEqual(0);
});