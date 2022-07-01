const { productsServices } = require('../services');

const getAll = async (req, res) => {
  const result = await productsServices.getAll();

  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const result = await productsServices.getById(req);

  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.status(200).json(result);
};

const create = async (req, res) => {
  const result = await productsServices.create(req);

  return res.status(201).json(result);
};

const update = async (req, res) => {
  const result = await productsServices.update(req);

  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.status(200).json(result);
};

const remove = async (req, res) => {
  const result = await productsServices.remove(req);

  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.status(204).end();
};

module.exports = { getAll, getById, create, update, remove };
