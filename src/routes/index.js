const newRoute = require('./news');
const siteRoute = require('./site');
const productsRoute = require('./products');
const meRoute = require('./me');

function route(app) {
    app.use('/me', meRoute)
    app.use('/news', newRoute);
    app.use('/products', productsRoute);
    app.use('/', siteRoute);
}

module.exports = route;