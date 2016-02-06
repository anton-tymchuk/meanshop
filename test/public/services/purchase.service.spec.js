describe('Purchase Service', function () {

  var PurchaseFactory,
      $window,
      storage = {},
      cartStorage = [{
          data: "data",
          name: "name"
        }];

  beforeEach(function () {
    module('shopApp');
    inject(function (_PurchaseFactory_, _$window_) {
      PurchaseFactory = _PurchaseFactory_;
      $window = _$window_;

      spyOn(window.localStorage, 'getItem')
        .and
        .callFake(function(key) {
          return storage[key];
        });
      spyOn($window.localStorage, 'setItem')
        .and
        .callFake(function (key, value) {
          storage[key] = value;
        });
    });

    $window.localStorage.setItem('cart', JSON.stringify(cartStorage));
  });

  afterEach(function () {
    storage = {};
  });

  it('Product should be an object', function () {
    expect(PurchaseFactory.product).toEqual({});
  });

  it('Product should be an Array', function () {
    expect(PurchaseFactory.cartProducts).toEqual([]);
  });

  describe('Cart functional', function () {

    it('Should get cart object from localStorage', function (){
      PurchaseFactory.updateCart();
      expect($window.localStorage.getItem('cart')).toBe(storage['cart']);
    });

    it('Should add product to cart array', function () {

      function getObjectFromLocalStorage(){
        return JSON.parse($window.localStorage.getItem('cart'));
      }

      PurchaseFactory.updateCart({});
      expect(getObjectFromLocalStorage().length).toBe(2);
    });
    
    it('Should return cart products from cart array', function () {
      expect(PurchaseFactory.cartProducts).toEqual([]);
      PurchaseFactory.getCartProducts();
      expect(PurchaseFactory.cartProducts).toEqual(cartStorage);
    });

  })

});