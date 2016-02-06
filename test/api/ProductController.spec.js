describe('ProductController', function () {
    var req,
        res;

    var Product = require('../../app/models/Product');
    var productController = require('../../app/controllers/productsController')(Product);
    res = jasmine.createSpyObj('res', ['json', 'send', 'status']);

    describe('API', function () {
        describe('Get products', function () {
            var products = [];

            it('Response status should be 200', function () {

                spyOn(Product, 'find').and.callFake(function (query, callback) {
                    callback(null, products);
                });

                res.status.and.callFake(function (resp) {
                    expect(resp).toEqual(200);
                });

                productController.get(req, res);
            });
        });
    });
});
