const sinon = require('sinon');
const { expect } = require('chai');

const { productsServices } = require('../../../services');
const { productsModels } = require('../../../models');

const req = {
  params: {
    id: 1,
  },
};

describe('Tests the behavior of the products services layer', () => {
  describe('Case it returns all products', () => {
    const mockResponse = [
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
    ];

    beforeEach(() => {
      sinon.stub(productsModels, 'getAll').resolves(mockResponse);
    });

    afterEach(() => {
      productsModels.getAll.restore();
    });

    it('should return an array with all products', async () => {
      const response = await productsServices.getAll();

      expect(response).to.be.an('array');
      expect(response).to.be.equal(mockResponse);
    });
  });

  describe('Case it returns a product by its id', () => {
    const mockResponse = [
      {
      id: 1,
      name: 'produto A',
      }
    ];

    beforeEach(() => {
      sinon.stub(productsModels, 'getById').resolves(mockResponse);
    });

    afterEach(() => {
      productsModels.getById.restore();
    });

    it('should return an object with a product by its id', async () => {
      const response = await productsServices.getById(req);

      expect(response).to.be.an('object');
      expect(response).to.be.equal(mockResponse[0]);
    });

  });

  describe('Case request has invalid data', () => {
    const mockResponse = [];

    beforeEach(() => {
      sinon.stub(productsModels, 'getById').resolves(mockResponse);
    });

    afterEach(() => {
      productsModels.getById.restore();
    });

    it('should return null if a product is not found', async () => {
      const response = await productsServices.getById(req);

      expect(response).to.be.equal(null);
    });
  });
});
