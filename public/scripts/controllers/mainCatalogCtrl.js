'use strict';

angular.module('shopApp')
    .controller('mainCatalogCtrl', function ($scope, Catalog) {
        Catalog.allProducts()
            .success(function (data) {
                $scope.products = data;
            });
    });

console.log('Controller is ok!');
