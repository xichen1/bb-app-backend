const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const bookSchema = new mongoose.Schema({
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
  bookDetail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BookDetail'
  }
});


bookSchema.plugin(uniqueValidator);
bookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;