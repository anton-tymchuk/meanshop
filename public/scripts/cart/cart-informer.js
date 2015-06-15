'use strict';
(function () {
    angular.module('shopApp')
        .directive('cartInformer', function () {
            return {
                restrict: 'E',
                templateUrl: '../../views/cart-informer.html',
                controller: 'cartCtrl',
            };
        })
}());
