const sinon = require('sinon');
const { expect } = require('chai');

const { connection, productsModels } = require('../../../models');

describe('Tests the behavior of the products model layer', () => {

  describe('Tests if it returns all products', () => {
    const mockResponse = [
      [
        {
          id: 1,
          name: 'produto A',
          quantity: 10
        },
        {
          id: 2,
          name: 'produto B',
          quantity: 20
        },
      ],
    ];

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(mockResponse);
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it('should return an array with all products', async () => {
      const response = await productsModels.getAll();

      expect(response).to.be.an('array');
      expect(response).to.be.equal(mockResponse[0]);
    });
  });

  describe('Tests if it returns a product by its id', () => {
    const mockResponse = [
      {
        id: 1,
        name: 'produto A',
        quantity: 10
      },
    ];

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(mockResponse);
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it('should return an object with a product by its id', async () => {
      const response = await productsModels.getById(1);

      expect(response).to.be.an('object');
      expect(response).to.be.equal(mockResponse[0]);
    });
  });
});
