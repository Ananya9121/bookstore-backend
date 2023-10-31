const Joi = require('joi');

function validate(schema, location) {
  return (req, res, next) => {
    const data = location === 'body' ? req.body : req[location];
    const { error } = schema.validate(data);

    if (error) {
        res.status(400).json({
        error: 'Bad Request - Invalid Input Data',
        details: error.details,
      });
    } else {
      next();
    }
  };
}

module.exports = validate;
