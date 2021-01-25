const mongoose = require('mongoose')



const url =
  `mongodb+srv://bb-app:159753abcPXC@cluster0.npj6c.mongodb.net/bb-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  about: String,
  available: String
})

const Book = mongoose.model('Book', bookSchema)

const book = new Book({
  title: 'HTML is Easy',
  author: "aa",
  about: "aa",
  available: "aa"
})

book.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})