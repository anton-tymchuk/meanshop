(function () {
    angular.module('shopApp')
        .directive('cartInformer', function (PurchaseFactory) {
            return {
                restrict: 'E',
                templateUrl: '../cart/cart-informer/cart-informer.html',
                controller: 'cartCtrl'
            };
        });
}());