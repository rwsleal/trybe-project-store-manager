const { salesSchema } = require('../schemas');

const salesValidation = (req, res, next) => {
  const [sales] = req.body;
  const { error } = salesSchema.validate(sales);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  return next();
};

module.exports = { salesValidation };
