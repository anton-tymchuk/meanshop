describe('cartCtrl', function (){
  var cartCtrl,
      mocks,
      orders,
      scope;

  beforeEach(function () {
    orders = {};
    mocks = {
      PurchaseFactory: {
        products: {},
        cartLenght: null,
        getCartProducts: jasmine.createSpy('PurchaseFactory.get')
          .and
          .callFake(function () {
            return orders;
        }),
        getCartLenght: jasmine.createSpy('PurchaseFactory.getCartLenght')
          .and
          .callFake(function(){
            this.cartLenght = 3;
          }),
        getCartSum: jasmine.createSpy('PurchaseFactory.getCartSum')
          .and
          .callFake(function () {
            return 50;
          }),
        removeFromCart: jasmine.createSpy('PurchaseFactory.removeFromCart')
          .and
          .callFake(function () {
            return 2;
          })
      }
    };

    module('shopApp', function ($provide) {
      $provide.value('PurchaseFactory', mocks.PurchaseFactory);
    });

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      cartCtrl = $controller('cartCtrl', {$scope: scope});
    });

  });

  describe('Cart page', function () {

    it('should get cart products', function (){
      expect(mocks.PurchaseFactory.getCartProducts).toHaveBeenCalled();
    });

    it('should remove one item from the cart array', function () {
      scope.cartProducts = [1,2,3];
      scope.removeFromCart(2);
      expect(mocks.PurchaseFactory.removeFromCart).toHaveBeenCalledWith(2);
      expect(mocks.PurchaseFactory.removeFromCart()).toBe(2);
    });
  });
  
  describe('Cart products', function () {

    it('New prices sum should be less then old prices sum', function () {
      scope.oldPriceSum = 100;
      scope.priceSum = 20;

      expect(scope.oldPriceSum > scope.priceSum).toBeTruthy();
    });

  })

});