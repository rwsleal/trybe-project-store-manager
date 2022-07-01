const errorHandler = require('./errorHandlerMiddleware');
const { productsValidation } = require('./productsValidationMiddleware');

module.exports = {
  errorHandler,
  productsValidation,
};
