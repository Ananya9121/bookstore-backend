const express = require('express');
const router = express.Router();
const bookStoreController = require('../controllers/bookStore.controller');
const validate = require('../validate/bookSore.validate'); 
const { 
    createBook,
    updateBook } = require('../validations/bookStore.validation'); 

router.get('/', bookStoreController.getAllBookss);
router.post('/', validate(createBook,'body'), bookStoreController.createBook);
router.get('/:id',bookStoreController.getBookById); 
router.put('/:id', validate(updateBook,'body'),bookStoreController.updateBookStore);
router.delete('/:id',bookStoreController.removeBookStore);

module.exports = router;
