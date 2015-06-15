'use strict';

var app = angular.module('shopApp', ['ngRoute']);

angular.module('shopApp')
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../views/main.html',
                controller: 'productsCtrl'
            })
            .when('/catalog', {
                templateUrl: '../views/catalog.html',
                controller: 'productsCtrl'
            })
            .when('/catalog/:productId', {
                templateUrl: '../scripts/product/product.html',
                controller: 'productCtrl'
            })
            .when('/cart', {
                templateUrl: '../scripts/cart/cart.html',
                controller: 'cartCtrl'
            })
            .when('/:catName', {
                templateUrl: '../views/catalog-cat.html',
                controller: 'categoriesCtrl'
            })

            .otherwise({redirectTo: "/"});

        $locationProvider.html5Mode(true);
    });
