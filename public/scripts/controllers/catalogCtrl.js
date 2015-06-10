'use strict';

angular.module('shopApp')
    .controller('catalogCtrl', function ($rootScope, $scope, Catalog) {
        Catalog.allProducts()
            .success(function (data) {
                $scope.products = data;
                $rootScope.header = "Каталог";
            });
    });

console.log('Catalog Controller!');
