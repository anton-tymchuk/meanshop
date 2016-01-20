(function () {
    angular.module('shopApp')
        .directive('addToCart', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/cart/add-to-cart/add-to-cart.html'
            };
        });
}());
