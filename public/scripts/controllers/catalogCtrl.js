'use strict';

angular.module('shopApp')
    .controller('catalogCtrl', function ($scope, Catalog) {
        $scope.products = Catalog.query();
    });

console.log('Controller is ok!');
