const { response } = require('express');
const express = require('express');
const cors = require('cors')


const app = express();
app.use(cors());
app.use(express.static('build'));

let bookData = [
  {
    "id": 1,
    "title": "book1",
    "author": "author1",
    "about": "about1",
    "available": "out"
  },
  {
    "id": 2,
    "title": "book2",
    "author": "author2",
    "about": "about2",
    "available": "on shelf"
  },
  {
    "id": 3,
    "title": "book3",
    "author": "author3",
    "about": "about3",
    "available": "on shelf"
  },
  {
    "id": 4,
    "title": "book4",
    "author": "author4",
    "about": "about4",
    "available": "on shelf"
  },
  {
    "id": 5,
    "title": "abc",
    "author": "eee",
    "about": "333",
    "available": "on shelf"
  }
]


app.get('/api/books', (req, res) => {
  res.json(bookData);
});

app.get('/api/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const book = bookData.find(book => book.id === id);
  if (book) {
    res.json(book)
  } else {
    res.status(404).end();
  }

});

const generateId = () => {
  const maxId = bookData.length > 0
    ? Math.max(...bookData.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/books', (req, res) => {
  const newId = generateId();

  const newBook = req.body;
  newBook.id = newId;
  bookData.concat(newBook);
  response.json(newBook);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});