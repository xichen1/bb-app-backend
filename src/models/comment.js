const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  bookDetail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BookDetail'
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;