describe('Product', function () {

  var Product;

  beforeEach(function () {
    module('shopApp');

    inject(function (_Product_) {
      Product = _Product_;
    });
  });

  it('Should has an initial object', function () {
    expect(Product.item).toEqual({});
  });

});