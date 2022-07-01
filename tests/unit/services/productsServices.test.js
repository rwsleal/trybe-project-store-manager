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
        name: 'produto A'
      },
      {
        id: 2,
        name: 'produto B'
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
      name: 'produto A'
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

  describe('Case it inserts a new product', () => {
    const mockResponse = [
      {
        insertId: 1,
      }
    ];

    beforeEach(() => {
      sinon.stub(productsModels, 'create').resolves(mockResponse);
    });

    afterEach(() => {
      productsModels.create.restore();
    });

    it('should return an object with an id and a name of the inserted product', async () => {
      req.body = { name: 'produto A' };
      const response = await productsServices.create(req);

      expect(response).to.be.an('object');
      expect(response).to.have.property('id');
      expect(response).to.have.property('name');
    });

  });

  describe('Case it updates an existing product', () => {
    const mockResponse = [
      {
        insertId: 1,
      }
    ];

    beforeEach(() => {
      sinon.stub(productsModels, 'update').resolves(mockResponse);
    });

    afterEach(() => {
      productsModels.update.restore();
    });

    it('should return an object with an id and a name of the updated product', async () => {
      req.body = { name: 'produto A' };
      const response = await productsServices.update(req);

      expect(response).to.be.an('object');
      expect(response).to.have.property('id');
      expect(response).to.have.property('name');
    });
  });

  describe('Case it removes a product', () => {
    const mockResponse = {
      affectedRows: 1,
    };

    beforeEach(() => {
      sinon.stub(productsModels, 'remove').resolves(mockResponse);
      sinon.stub(productsModels, 'getById').resolves([{ id: 1, name: 'produto A' }]);
    });

    afterEach(() => {
      productsModels.remove.restore();
      productsModels.getById.restore();
    });

    it('should return an object with information about the removal', async () => {
      const response = await productsServices.remove(req);

      expect(response).to.be.an('object');
      expect(response).to.have.property('affectedRows');
    });
  });

  describe('Case request has invalid data', () => {

    beforeEach(() => {
      sinon.stub(productsModels, 'getById').resolves([]);
      sinon.stub(productsModels, 'update').resolves({ changedRows: 0 });
      sinon.stub(productsModels, 'remove').resolves([]);
    });

    afterEach(() => {
      productsModels.getById.restore();
      productsModels.update.restore();
      productsModels.remove.restore();
    });

    it('should return null if a product with the given id is not found', async () => {
      const response = await productsServices.getById(req);

      expect(response).to.be.equal(null);
    });

    it('should return null if a product update fails', async () => {
      req.body = { name: 'produto A' };
      const response = await productsServices.update(req);

      expect(response).to.be.equal(null);
    });

    it('should return null if a product removal fails', async () => {
      const response = await productsServices.remove(req);

      expect(response).to.be.equal(null);
    });
  });
});
