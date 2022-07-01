const Joi = require('joi');

module.exports = Joi.object({
  productId: Joi.number().required().messages({
    'any.required': '400|"productId" is required',
  }),
  quantity: Joi.number().integer().greater(0).strict()
    .required()
    .messages({
      'any.required': '400|"quantity" is required',
      'number.greater': '422|"quantity" must be greater than or equal to 1',
    }),
});
