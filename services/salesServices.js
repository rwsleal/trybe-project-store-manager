const { salesModels } = require('../models');

const create = async (req) => {
  const products = req.body;

  const getAllIds = await Promise.all(products
    .map(async ({ productId }) => salesModels.getById(productId)));

  const idCheck = getAllIds.every((idResponse) => (idResponse.length));

  if (!idCheck) {
    return null;
  }

  const { insertId } = await salesModels.createSale();

  const response = await Promise.all(products
    .map(async ({ productId, quantity }) => salesModels
      .createSaleProducts(insertId, productId, quantity)));

  const result = { id: insertId, itemsSold: response };

  return result;
};

module.exports = { create };
