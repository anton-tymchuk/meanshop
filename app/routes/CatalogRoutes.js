var express = require('express');

var routes = function (Product) {
    var catalogRouter = express.Router();
    var catalogController = require('../controllers/catalogController.js')(Product);

    // Fetch brand and category list
    catalogRouter.route('/')
        .get(catalogController.get);


    // Fetch products from current category
    catalogRouter.use('/:catName', function (req, res, next) {
        Product.find({type: req.params.catName}, function (err, categories) {
            if (err) {
                res.status(500).send(err);
            } else if(categories) {
                req.categories = categories;
                next();
            } else {
                res.status(404).send('Products not found');
            }
        });
    });

    catalogRouter.route('/:catName')
        .get(catalogController.getProducts);

    return catalogRouter;
};

module.exports = routes;
