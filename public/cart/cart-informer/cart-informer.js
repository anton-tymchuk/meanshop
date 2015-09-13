(function () {
    angular.module('shopApp')
        .directive('cartInformer', function () {
            return {
                restrict: 'E',
                templateUrl: '../cart/cart-informer/cart-informer.html',
                controller: 'cartCtrl'
            };
        });
}());
