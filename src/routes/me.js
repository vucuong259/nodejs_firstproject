const meController = require('../app/controllers/MeController');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// Create application/json parser
const urlencoded = bodyParser.urlencoded({ extended: false });

router.get('/stored/products', meController.storedProducts);
module.exports = router;