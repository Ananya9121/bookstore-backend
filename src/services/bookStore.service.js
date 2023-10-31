const BookStore = require('../models/bookStore.model');

async function getAllBooks() {
  try {
    return await BookStore.find();
  } catch (error) {
    throw error;
  }
}

async function createBook(bookDto) {
  try {
    const { title, author, summary } = bookDto;
    const newBook = new BookStore({ title, author, summary });
    return await newBook.save();
  } catch (error) {
    throw error;
  }
}

async function getBookById(id) {
  try {
    return await BookStore.findById(id);
  } catch (error) {
    throw error;
  }
}

async function updateBook(id, updateData) {
  try {
    return await BookStore.findByIdAndUpdate(id, updateData, { new: true });
  } catch (error) {
    throw error;
  }
}

async function removeBook(id) {
  try {
    return await BookStore.findByIdAndRemove(id);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  removeBook,
};
