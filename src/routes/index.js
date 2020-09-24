const newRoute = require('./news');
const siteRoute = require('./site');
const productsRoute = require('./products');

function route(app) {
    app.use('/news', newRoute);
    app.use('/products', productsRoute);
    app.use('/', siteRoute);
}

module.exports = route;