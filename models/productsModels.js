const connection = require('./connection');

const getAll = async () => {
  const sqlQuery = 'SELECT * FROM StoreManager.products ORDER BY id;';
  const [result] = await connection.execute(sqlQuery);

  return result;
};

const getById = async (id) => {
  const sqlQuery = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [result] = await connection.execute(sqlQuery, [id]);

  return result;
};

const create = async (name) => {
  const sqlQuery = 'INSERT INTO StoreManager.products (name) VALUES (?);';
  const [result] = await connection.execute(sqlQuery, [name]);

  return result;
};

const remove = async (id) => {
  const sqlQuery = 'DELETE FROM StoreManager.products WHERE id = ?;';
  const [result] = await connection.execute(sqlQuery, [id]);

  return result;
};

module.exports = { getAll, getById, create, remove };
