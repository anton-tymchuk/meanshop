angular.module('shopApp')
    .directive('addToCart', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '../../views/add-to-cart.html',
            controller: 'productCtrl'
        }
    });
