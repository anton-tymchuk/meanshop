(function () {
    angular.module('shopApp')
        .directive('addToCart', function () {
            return {
                restrict: 'E',
                templateUrl: '../../views/add-to-cart.html'
            };
        });
}());
