'use strict';

angular.module('shopApp')
    .controller('categoryListCtrl', function ($scope, $routeParams, Category) {
        Category.getCategoryList()
            .success(function (data) {
                $scope.categories = data;
            });
    });

    console.log('Category controller - ok!');
