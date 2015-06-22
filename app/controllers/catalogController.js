var catalogController = function (Product) {

    // Create listing (brands or catrgories) array
    function createList(arr, key){
        var listing = [];

        for(var i = 0, j = arr.length; i < j; i++){
            var current = arr[i][key];

            if(listing.indexOf(current) < 0){
                listing.push(current);
            }
        }

        return listing;
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
