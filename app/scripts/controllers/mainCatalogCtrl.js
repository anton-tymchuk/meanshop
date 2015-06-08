'use strict';

angular.module('shopApp')
    .controller('mainCatalogCtrl', function ($scope, Catalog) {
        $scope.products = Catalog.query();
    });

console.log('Controller is ok!');
