const express = require('express');
const { productsControllers } = require('../controllers');
const { productsValidation } = require('../middlewares');

const router = express.Router();

router.get('/', productsControllers.getAll);
router.get('/search', productsControllers.search);
router.get('/:id', productsControllers.getById);
router.post('/', productsValidation, productsControllers.create);
router.put('/:id', productsValidation, productsControllers.update);
router.delete('/:id', productsControllers.remove);

module.exports = router;
