'use strict';
(function () {
    angular.module('shopApp')
        .directive('productImages', function () {
            return {
                restrict: 'E',
                templateUrl: '../../views/product-images.html',
            }
        });
}());
