var express = require('express');

var routes = function (Product) {
    var catalogRouter = express.Router();

    //TODO: Get brand and category list
    catalogRouter.route('/')
        .get(function (req, res) {
            Product.find({}, function (err, cats) {

                var listingObj = {
                    categories: getList(cats, 'type'), 
                    brands: getList(cats, 'brand')
                };

                res.json(listingObj);
            });
        });

    // Fetch products from current category
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

// Create listing array
function getList(arr, key){
    var listing = [];

    for(var i = 0, j = arr.length; i < j; i++){
        var current = arr[i][key];

        if(listing.indexOf(current) < 0){
            listing.push(current);
        }
    }

    return listing;

}

module.exports = routes;
