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

module.exports = {
  getAll,
  getById,
};
