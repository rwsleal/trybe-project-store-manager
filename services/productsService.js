const { productsModel } = require("../models");

const getAll = async () => {
  const result = await productsModel.getAll();

  return result;
};

const getById = async (req) => {
  const { id } = req.params;

  const result = await productsModel.getById(id);

  if (!result.length) {
    return null;
  }

  return result[0];
};

module.exports = {
  getAll,
  getById,
};
