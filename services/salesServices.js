const { salesModels, productsModels } = require('../models');

const getAll = async () => {
  const result = await salesModels.getAll();

  return result.map((queryResult) => ({
    saleId: queryResult.sale_id,
    date: queryResult.date,
    productId: queryResult.product_id,
    quantity: queryResult.quantity,
  }));
};

const getById = async (req) => {
  const { id } = req.params;
  const result = await salesModels.getById(id);

  if (!result.length) {
    return null;
  }

  return result.map((queryResult) => ({
    date: queryResult.date,
    productId: queryResult.product_id,
    quantity: queryResult.quantity,
  }));
};

const create = async (req) => {
  const products = req.body;

  const getAllIds = await Promise.all(products
    .map(async ({ productId }) => productsModels.getById(productId)));

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

const update = async (req) => {
  const { id } = req.params;
  const products = req.body;

  const saleIdCheck = await salesModels.getById(id);
  if (!saleIdCheck.length) {
    return { saleId: null };
  }

  const getAllIds = await Promise.all(products
    .map(async ({ productId }) => productsModels.getById(productId)));

  const productsIdCheck = getAllIds.every((idResponse) => (idResponse.length));

  if (!productsIdCheck) {
    return { saleId: id, itemsUpdated: null };
  }

  const result = await Promise.all(products
    .map(async ({ productId, quantity }) => {
      await salesModels.update(id, quantity, productId);
      return { productId, quantity };
    }));

  return { saleId: id, itemsUpdated: result };
};

const remove = async (req) => {
  const { id } = req.params;

  const idCheck = await salesModels.getById(id);
  if (!idCheck.length) {
    return null;
  }

  const result = await salesModels.remove(id);

  return result;
};

module.exports = { getAll, getById, create, update, remove };
