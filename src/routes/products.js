const productController = require('../app/controllers/ProductController');
const express = require('express');
const router = express.Router();

router.get('/create', productController.create);
router.post('/store', productController.store);
router.get('/:slug', productController.show);

module.exports = router;