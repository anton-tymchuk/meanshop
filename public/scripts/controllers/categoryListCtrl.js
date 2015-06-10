'use strict';

angular.module('shopApp')
    .controller('categoryListCtrl', function ($scope, $routeParams, Category) {
        Category.getCategoryList()
            .success(function (data) {
                $scope.categories = data.categories;
                $scope.brands = data.brands;
            });
    });

    console.log('Category controller - ok!');
