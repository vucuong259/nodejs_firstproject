const productController = require('../app/controllers/ProductController');
const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser');
// Create application/json parser
// const urlencoded = bodyParser.urlencoded({ extended: false });

router.get('/create', productController.create);
router.post('/store', productController.store);
router.get('/:id/edit', productController.edit);
router.delete('/:id', productController.destroy);
router.put('/:id', productController.update);
router.get('/:slug', productController.show);

module.exports = router;