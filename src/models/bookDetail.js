const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const bookDetailSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }
});

bookDetailSchema.plugin(uniqueValidator);
bookDetailSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const BookDetail = mongoose.model('BookDetail', bookDetailSchema);
module.exports = BookDetail;