var _ = require('underscore');
var catalogController = function (Product) {

    // Create listing (brands or catrgories) array
    function createList(arr, name){

        var arrNew = _.map(arr, function(num){
            return num[name];
        });

        return _.uniq(arrNew);
    }

    // Get category and brand listing
    var get = function (req, res) {
        Product.find({}, function (err, cats) {

            var listingObj = {
                categories: createList(cats, 'type'),
                brands: createList(cats, 'brand')
            };

            res.json(listingObj);
        });
    };

    // Get products from selected category
    var getProducts = function (req, res) {
        res.json(req.categories);
    };

    return{
        get: get,
        getProducts: getProducts
    };
};

module.exports = catalogController;
