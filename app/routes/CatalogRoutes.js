var express = require('express');

var routes = function (Product) {
    var catalogRouter = express.Router();

    //TODO: Get all categories list
    catalogRouter.route('/')
        .get(function (req, res) {
            Product.find({}, function (err, cats) {
                var catArray = [];

                for(var i = 0, j = cats.length; i < j; i++){
                    var current = cats[i].type

                    if(catArray.indexOf(current) < 0){
                        catArray.push(current);
                    }
                }

                res.json(catArray);
            });
        });

    // Fetch products from a category
    catalogRouter.use('/:catName', function (req, res, next) {
        Product.find({type: req.params.catName}, function (err, categories) {
            if (err) {
                res.status(500).send(err);
            } else if(categories) {
                req.categories = categories;
                next();
            } else {
                res.status(404).send('Products not found')
            }
        });
    })

    catalogRouter.route('/:catName')
        .get(function (req, res) {
            res.json(req.categories);
        });



    return catalogRouter;
};

module.exports = routes;
