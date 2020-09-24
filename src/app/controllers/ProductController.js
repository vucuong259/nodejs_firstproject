const Product = require('../models/Product');
const { mongooseToObject } = require('../../util/mongoose');

class ProductController {
    // [GET] /products/:slug
    show(req, res, next) {
            Product.findOne({ slug: req.params.slug })
                .then((product) => {
                    res.render('products/show', { product: mongooseToObject(product) });
                })
                .catch(next);

        }
        // [GET] /products/create
    create(req, res, next) {
            res.render('products/create');
        }
        // [POST] /products/store
    store(req, res, next) {

    }
}

module.exports = new ProductController