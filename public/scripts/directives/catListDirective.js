angular.module('shopApp')
    .directive('catList', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '../../views/cat-list.html',
            controller: 'categoryListCtrl'
        }
    });
