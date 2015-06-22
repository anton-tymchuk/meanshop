(function () {
    angular.module('shopApp')
        .controller('productsCtrl', ['$rootScope', '$scope', 'Catalog', function ($rootScope, $scope, Catalog) {

            Catalog.getProducts();
            $scope.products = Catalog;

        }]);
}());
