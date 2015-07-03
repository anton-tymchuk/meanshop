(function () {
    angular.module('shopApp')
        .directive('brandList', function () {
            return {
                restrict: 'E',
                templateUrl: '../products-list/brands/brand-list.html'
            };
        });
}());
