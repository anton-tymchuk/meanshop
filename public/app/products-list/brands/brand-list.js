(function () {
    angular.module('shopApp')
        .directive('brandList', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/products-list/brands/brand-list.html'
            };
        });
}());
