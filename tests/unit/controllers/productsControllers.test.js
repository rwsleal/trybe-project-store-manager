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

  describe('Case it inserts a new product', () => {

    const mockResponse = {
      id: 1,
      name: 'produto A',
    };

    beforeEach(async () => {
      sinon.stub(productsServices, 'create').resolves(mockResponse);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    afterEach(() => {
      productsServices.create.restore()
    });

    it('should return a json with the inserted product id and name', async () => {
      await productsControllers.create(req, res);

      expect(res.json.calledWith(mockResponse)).to.be.equal(true);
    });

    it('should return 200 as a status code', async () => {
      await productsControllers.create(req, res);

      expect(res.status.calledWith(201)).to.be.equal(true);
    });
  });

  describe('Case it updates an existing product', () => {

    const mockResponse = {
      id: 1,
      name: 'produto A',
    };

    beforeEach(async () => {
      sinon.stub(productsServices, 'update').resolves(mockResponse);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    afterEach(() => {
      productsServices.update.restore()
    });

    it('should return a json with the updated product id and name', async () => {
      await productsControllers.update(req, res);

      expect(res.json.calledWith(mockResponse)).to.be.equal(true);
    });

    it('should return 200 as a status code', async () => {
      await productsControllers.update(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('Case it removes a product', () => {

    beforeEach(async () => {
      sinon.stub(productsServices, 'remove').resolves([{}]);

      res.status = sinon.stub().returns(res);
      res.end = sinon.stub().returns();
    });

    afterEach(() => {
      productsServices.remove.restore()
    });

    it('should return 204 as a status code', async () => {
      await productsControllers.remove(req, res);

      expect(res.status.calledWith(204)).to.be.equal(true);
    });
  });

  describe('Case request has invalid data', () => {
    const mockResponse = null;

    beforeEach(async () => {
      sinon.stub(productsServices, 'getById').resolves(mockResponse);
      sinon.stub(productsServices, 'update').resolves(mockResponse);
      sinon.stub(productsServices, 'remove').resolves(mockResponse);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    });

    afterEach(() => {
      productsServices.getById.restore();
      productsServices.update.restore();
      productsServices.remove.restore();
    });

    it('should return a message if a product is not found', async () => {
      await productsControllers.getById(req, res);

      expect(res.json.calledWith({ message: 'Product not found'})).to.be.equal(true);
    });

    it('should return a message if a product update fails', async () => {
      await productsControllers.update(req, res);

      expect(res.json.calledWith({ message: 'Product not found' })).to.be.equal(true);
    });

    it('should return a message if a product removal fails', async () => {
      await productsControllers.remove(req, res);

      expect(res.json.calledWith({ message: 'Product not found' })).to.be.equal(true);
    });
  });
});
