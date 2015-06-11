'use strict';

var app = angular.module('shopApp', ['ngRoute']);

angular.module('shopApp')
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../views/main.html',
                controller: 'mainCatalogCtrl'
            })
            .when('/catalog', {
                templateUrl: '../views/catalog.html',
                controller: 'catalogCtrl'
            })
            .when('/catalog/:productId', {
                templateUrl: '../views/product.html',
                controller: 'productCtrl'
            })
            .when('/:catName', {
                templateUrl: '../views/catalog-cat.html',
                controller: 'categoryCtrl'
            })
            .otherwise({redirectTo: "/"});

        $locationProvider.html5Mode(true);
    });
