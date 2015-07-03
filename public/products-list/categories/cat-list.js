(function () {
    angular.module('shopApp')
        .directive('catList', function () {
            return {
                restrict: 'E',
                templateUrl: '../products-list/categories/cat-list.html',
                controller: 'categoriesCtrl'
            };
        });
}());
