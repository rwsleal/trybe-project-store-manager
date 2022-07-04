const connection = require('./connection');

const getAll = async () => {
  const sqlQuery = 'SELECT sp.sale_id, sa.date, sp.product_id, sp.quantity '
    + 'FROM StoreManager.sales AS sa INNER JOIN StoreManager.sales_products AS sp '
    + 'ON sa.id = sp.sale_id '
    + 'ORDER BY sp.sale_id, sp.product_id;';
  const [result] = await connection.execute(sqlQuery);

  return result;
};

const getById = async (id) => {
  const sqlQuery = 'SELECT sa.date, sp.product_id, sp.quantity '
    + 'FROM StoreManager.sales AS sa INNER JOIN StoreManager.sales_products AS sp '
    + 'ON sa.id = sp.sale_id WHERE sp.sale_id = ?;';
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

const update = async (id, quantity, productId) => {
  const sqlQuery = 'UPDATE StoreManager.sales_products SET sale_id = ?, quantity = ? '
    + 'WHERE product_id = ?;';

  const [result] = await connection.execute(sqlQuery, [id, quantity, productId]);

  return result;
};

const remove = async (id) => {
  const sqlQuery = 'DELETE FROM StoreManager.sales WHERE id = ?';
  const [result] = await connection.execute(sqlQuery, [id]);

  return result;
};

module.exports = { getAll, getById, createSale, createSaleProducts, update, remove };
