const errorHandler = require('./errorHandlerMiddleware');
const { productsValidation } = require('./productsValidationMiddleware');
const { salesValidation } = require('./salesValidationMiddleware');

module.exports = {
  errorHandler,
  productsValidation,
  salesValidation,
};
