'use strict';
(function () {
    angular.module('shopApp')
        .directive('catList', function () {
            return {
                restrict: 'E',
                templateUrl: '../../views/cat-list.html',
                controller: 'categoriesCtrl'
            }
        });
}());
