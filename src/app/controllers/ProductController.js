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
            const formData = req.body
            formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
            const product = new Product(formData);
            product.save()
                .then(() => res.redirect('/'))
                .catch(error => {

                });
        }
        // [GET] /products/:id/edit
    edit(req, res, next) {
            Product.findById(req.params.id)
                .then((product) => {
                    res.render('products/edit', { product: mongooseToObject(product) });
                })
                .catch(next);
        }
        // [PUT] /products/:id
    update(req, res, next) {
            const formData = req.body
            formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
            Product.updateOne({ _id: req.params.id }, formData)
                .then(() => res.redirect('/me/stored/products'))
                .catch(next);
        }
        // [DELETE] /products/:id
    destroy(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new ProductController