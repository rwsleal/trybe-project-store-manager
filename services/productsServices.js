const { productsModels } = require('../models');

const getAll = async () => {
  const result = await productsModels.getAll();

  return result;
};

const getById = async (req) => {
  const { id } = req.params;

  const result = await productsModels.getById(id);

  if (!result.length) {
    return null;
  }

  return result[0];
};

const create = async (req) => {
  const { name } = req.body;

  const result = await productsModels.create(name);

  return { id: result.insertId, name };
};

const update = async (req) => {
  const { id } = req.params;
  const { name } = req.body;

  const result = await productsModels.update(id, name);

  if (result.changedRows === 0) {
    return null;
  }

  return { id, name };
};

const remove = async (req) => {
  const { id } = req.params;

  const idCheck = await productsModels.getById(id);
  if (!idCheck.length) {
    return null;
  }

  const result = await productsModels.remove(id);

  return result;
};

const search = async (req) => {
  const searchTerm = req.query.q;

  const getAllProducts = await productsModels.getAll();

  const result = getAllProducts.filter(({ name }) => name.includes(searchTerm));

  return result;
};

module.exports = { getAll, getById, create, update, remove, search };
