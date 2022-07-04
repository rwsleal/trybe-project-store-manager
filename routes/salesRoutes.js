const express = require('express');
const { salesControllers } = require('../controllers');
const { salesValidation } = require('../middlewares');

const router = express.Router();

router.get('/', salesControllers.getAll);
router.get('/:id', salesControllers.getById);
router.post('/', salesValidation, salesControllers.create);
router.delete('/:id', salesControllers.remove);

module.exports = router;
