(function () {
    angular.module('shopApp')
        .directive('catList', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/products-list/categories/cat-list.html',
                controller: 'categoriesCtrl'
            };
        });
}());
