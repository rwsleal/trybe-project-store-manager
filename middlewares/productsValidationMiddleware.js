const { productsSchema } = require('../schemas');

const productsValidation = (req, res, next) => {
  const { name } = req.body;
  const { error } = productsSchema.validate({ name });

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  return next();
};

module.exports = { productsValidation };
