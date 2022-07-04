const { salesServices } = require('../services');

const getAll = async (req, res) => {
  const result = await salesServices.getAll();

  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const result = await salesServices.getById(req);

  if (!result) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  return res.status(200).json(result);
};

const create = async (req, res) => {
  const result = await salesServices.create(req);

  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.status(201).json(result);
};

module.exports = { getAll, getById, create };
