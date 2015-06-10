'use strict';

angular.module('shopApp')
    .controller('mainCatalogCtrl', function ($rootScope, $scope, Catalog) {
        Catalog.allProducts()
            .success(function (data) {
                $scope.products = data;
                $rootScope.header = "My shop App";
            });
    });

console.log('Controller is ok!');
