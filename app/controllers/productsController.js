var _ = require('underscore');

var productsController = function (Product) {

    // Post new product function
    var post = function (req, res) {

        // Get images path
        var urlArray = [];

        if(req.files){
            if(req.files.images === undefined) {
                urlArray = [];
            }
            else if(!Array.isArray(req.files.images)){
                urlArray.push(req.files.images.path.slice(7));
            } else{
                urlArray = _.map(req.files.images, function(num){
                   return num.path.slice(7);
               });
            }
        }

        console.log(req.files);

        var newProduct = new Product({
            sku: req.body.sku,
            title: req.body.title,
            description: req.body.description,
            brand: req.body.brand,
            type: req.body.type,
            pricing: {
                price: req.body.price,
                oldPrice: req.body.oldPrice,
                inStock: req.body.inStock || 10
            },
            details: {
                sizes: req.body.sizes,
                color: req.body.color,
                structure: req.body.structure
            },
            images: urlArray,
            seo: {
                title: req.body.seoTitle
            }
        });

        newProduct.save(function (err) {
            if(err) {
                throw err;
            }
            else {
                console.log('New Product has been posted');
            }

            res.status(200);
            res.json({
                success: true,
                product: newProduct
            });
        });
    };

    // Get all products function
    var get = function (req, res) {
        Product.find({}, function (err, products) {
            if(err) {
                res.send(err);
                return;
            }
            res.json(products);
            res.status(200);
        });
    };

    var getOne = function (req, res) {
        res.json(req.product);
    };

    return {
        post: post,
        get: get,
        getOne: getOne
    };

};

module.exports = productsController;
