const express = require('express');
const { productsControllers } = require('../controllers');
const { productsValidation } = require('../middlewares');

const router = express.Router();

router.get('/', productsControllers.getAll);
router.get('/:id', productsControllers.getById);
router.post('/', productsValidation, productsControllers.create);

module.exports = router;
