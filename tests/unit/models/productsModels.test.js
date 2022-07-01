const sinon = require('sinon');
const { expect } = require('chai');

const { connection, productsModels } = require('../../../models');

describe('Tests the behavior of the products models layer', () => {

  describe('Case it returns all products', () => {
    const mockResponse = [
      [
        {
          id: 1,
          name: 'produto A'
        },
        {
          id: 2,
          name: 'produto B'
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

  describe('Case it returns a product by its id', () => {
    const mockResponse = [
      {
        id: 1,
        name: 'produto A'
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

  describe('Case it inserts a new product', () => {
    const mockResponse = [{
      fieldCount: 0,
      affectedRows: 1,
      insertId: 3,
      info: '',
      serverStatus: 2,
      warningStatus: 0
    }];

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(mockResponse);
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it('should return an object with information about the insertion', async () => {
      const response = await productsModels.create();

      expect(response).to.be.an('object');
      expect(response).to.be.equal(mockResponse[0]);
      expect(response).to.have.property('affectedRows', 1);
      expect(response).to.have.property('insertId', 3);
    });
  });

  describe('Case it updates a product', () => {
    const mockResponse = [{
      fieldCount: 0,
      affectedRows: 1,
      insertId: 0,
      info: 'Rows matched: 1  Changed: 1  Warnings: 0',
      serverStatus: 2,
      warningStatus: 0,
      changedRows: 1
    }];

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(mockResponse);
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it('should return an object with information about the update', async () => {
      const response = await productsModels.update();

      expect(response).to.be.an('object');
      expect(response).to.be.equal(mockResponse[0]);
      expect(response).to.have.property('affectedRows', 1);
      expect(response).to.have.property('changedRows', 1);
    });
  });

  describe('Case it removes a product', () => {
    const mockResponse = [{
      fieldCount: 0,
      affectedRows: 1,
      insertId: 0,
      info: '',
      serverStatus: 2,
      warningStatus: 0
    }];

    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(mockResponse);
    });

    afterEach(() => {
      connection.execute.restore();
    });

    it('should return an object with information about the removal', async () => {
      const response = await productsModels.remove();

      expect(response).to.be.an('object');
      expect(response).to.be.equal(mockResponse[0]);
      expect(response).to.have.property('affectedRows', 1);
    });
  });
});
