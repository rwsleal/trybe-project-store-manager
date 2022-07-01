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

const remove = async (req) => {
  const { id } = req.params;

  const idCheck = await productsModels.getById(id);

  if (!idCheck.length) {
    return null;
  }

  const result = await productsModels.remove(id);

  return result;
};

module.exports = { getAll, getById, create, remove };
