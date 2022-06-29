const { productsService } = require('../services');

const getAll = async (req, res) => {
  const result = await productsService.getAll();

  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const result = await productsService.getById(req);

  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.status(200).json(result);
};

module.exports = { getAll, getById };
