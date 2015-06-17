;(function () {
    'use strict';
    angular.module('shopApp')
        .directive('cartInformer', function () {
            return {
                restrict: 'E',
                templateUrl: '../../views/cart-informer.html',
                controller: 'cartCtrl',
            };
        })
}());
