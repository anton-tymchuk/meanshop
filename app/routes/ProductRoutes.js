var express = require('express');

var routes = function (Product) {
    var productRouter = express.Router();
    var productsController = require('../controllers/productsController')(Product);
    var token = require('../controllers/tokenController')();

    // Add product
    productRouter.use('/addproduct', function (req, res, next) {
        token.verifyToken(req, res, next);
    });

    productRouter.route('/addproduct')
        .post(productsController.post);


    // Fetch product
    productRouter.use('/:productId', function (req, res, next) {
        Product.findOne({sku: req.params.productId}, function (err, product) {
            if (err) {
                res.status(500).send(err);
            } else if(product) {
                req.product = product;
                next();
            } else {
                res.status(404).send('Product not found');
            }
        });
    });

    productRouter.route('/:productId')
        .get(productsController.getOne);

    productRouter.route('/')
        .get(productsController.get);

    return productRouter;
};

module.exports = routes;
