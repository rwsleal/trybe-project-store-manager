const sinon = require('sinon');
const { expect } = require('chai');

const { productsControllers } = require('../../../controllers');
const { productsServices } = require('../../../services');

describe('Tests the behavior of the products controllers layer', () => {
  const req = {};
  const res = {};

  describe('Case it returns all products', () => {

    const mockResponse = [
      {
        id: 1,
        name: 'produto A',
      },
      {
        id: 2,
        name: 'produto B',
      },
    ];

    beforeEach(async () => {
      sinon.stub(productsServices, 'getAll').resolves(mockResponse);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    afterEach(() => {
      productsServices.getAll.restore()
    });

    it('should return a json with all products', async () => {
      await productsControllers.getAll(req, res);

      expect(res.json.calledWith(mockResponse)).to.be.equal(true);
    });

    it('should return 200 as a status code', async () => {
      await productsControllers.getAll(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('Case it returns a product by its id', () => {

    const mockResponse = {
      id: 1,
      name: 'produto A',
    };

    beforeEach(async () => {
      sinon.stub(productsServices, 'getById').resolves(mockResponse);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    afterEach(() => {
      productsServices.getById.restore()
    });

    it('should return a json with a product by its id', async () => {
      await productsControllers.getById(req, res);

      expect(res.json.calledWith(mockResponse)).to.be.equal(true);
    });

    it('should return 200 as a status code', async () => {
      await productsControllers.getById(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('Case request has invalid data', () => {
    const mockResponse = null;

    beforeEach(async () => {
      sinon.stub(productsServices, 'getById').resolves(mockResponse);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    afterEach(() => {
      productsServices.getById.restore()
    });

    it('should return a message if a product is not found', async () => {
      await productsControllers.getById(req, res);

      expect(res.json.calledWith({ message: 'Product not found'})).to.be.equal(true);
    });
  });
});
