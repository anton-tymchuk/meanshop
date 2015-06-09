'use strict';

angular.module('shopApp')
    .controller('catalogCtrl', function ($scope, Catalog) {
        Catalog.allProducts()
            .success(function (data) {
                $scope.products = data;
            });
    });

console.log('Controller is ok!');
