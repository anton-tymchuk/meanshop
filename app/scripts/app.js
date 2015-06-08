'use strict';

var app = angular.module('shopApp', ['ngRoute', 'ngResource']);

angular.module('shopApp')
    .config(function ($routeProvider) {
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
            });
    });
