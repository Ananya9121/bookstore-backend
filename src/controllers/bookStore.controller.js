const bookStoreService = require('../services/bookStore.service');

async function getAllBookss(req, res) {
  try {
    const books = await bookStoreService.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function createBook(req, res) {
  try {
    const newBook = await bookStoreService.createBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getBookById(req, res) {
  try {
    const { id } = req.params;
    const book = await bookStoreService.getBookById(id);
    if (!book) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.json(book);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateBookStore(req, res) {
  try {
    const { id } = req.params;
    const updatedBook = await bookStoreService.updateBook(id, req.body);
    if (!updatedBook) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.json(updatedBook);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function removeBookStore(req, res) {
  try {
    const { id } = req.params;
    const deletedBook = await bookStoreService.removeBook(id);
    if (!deletedBook) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.json({ message: 'Book removed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllBookss,
  createBook,
  getBookById,
  updateBookStore,
  removeBookStore,
};
