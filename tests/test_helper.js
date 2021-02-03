const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongodb = new MongoMemoryServer();

const connect = async () => {
  const uri = await mongodb.getUri();
  const mongooseOpts = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true };
  await mongoose.connect(uri, mongooseOpts);
};

const closeDatabase = async () => {
  await mongoose.disconnect();
  await mongodb.stop();
};

const clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};

module.exports = {
  connect, clearDatabase, closeDatabase
};