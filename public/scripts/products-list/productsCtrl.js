'use strict';
(function () {
    angular.module('shopApp')
        .controller('productsCtrl', ['$rootScope', '$scope', 'Catalog', function ($rootScope, $scope, Catalog) {
            Catalog.allProducts()
                .success(function (data) {
                    $scope.products = data;
                });
        }]);
}());
