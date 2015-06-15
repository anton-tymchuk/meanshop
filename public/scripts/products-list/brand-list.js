'use strict';
(function () {
    angular.module('shopApp')
        .directive('brandList', function () {
            return {
                restrict: 'E',
                templateUrl: '../../views/brand-list.html',
                // controller: 'categoriesCtrl'
            }
        });
}());
