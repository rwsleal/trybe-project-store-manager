const connection = require('./connection');

const getById = async (id) => {
  const sqlQuery = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [result] = await connection.execute(sqlQuery, [id]);

  return result;
};

const createSale = async () => {
  const sqlQuery = 'INSERT INTO StoreManager.sales (date) VALUES (NOW());';
  const [result] = await connection.execute(sqlQuery);

  return result;
};

const createSaleProducts = async (saleId, productId, quantity) => {
  const sqlQuery = 'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) '
    + 'VALUES (?, ?, ?);';

  await connection.execute(sqlQuery, [saleId, productId, quantity]);

  return { productId, quantity };
};

module.exports = { getById, createSale, createSaleProducts };
