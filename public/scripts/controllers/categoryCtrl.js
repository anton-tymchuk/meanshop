'use strict';

angular.module('shopApp')
    .controller('categoryCtrl', function ($rootScope, $scope, $routeParams, Category) {
        var catName = $routeParams.catName;
        Category.getCategory(catName)
            .success(function (data) {
                $scope.catProducts = data;
                $rootScope.header = data[0].type;
            });
    });

    console.log('Single Category controller - ok!');
