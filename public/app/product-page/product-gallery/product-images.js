(function () {
    angular.module('shopApp')
        .directive('productImages', function () {
            return {
                restrict: 'E',
                templateUrl: 'app/product-page/product-gallery/product-images.html',
            };
        });
}());
