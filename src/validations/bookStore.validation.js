const Joi = require('joi');

const createBook = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  summary: Joi.string().required(),
});

const updateBook = Joi.object({
  title: Joi.string(),
  author: Joi.string(),
  summary: Joi.string(),
}).or('title', 'author', 'summary');

module.exports = {
  createBook,
  updateBook,
};
