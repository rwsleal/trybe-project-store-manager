const { salesServices } = require('../services');

const create = async (req, res) => {
  const result = await salesServices.create(req);

  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.status(201).json(result);
};

module.exports = { create };
