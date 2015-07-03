(function () {
    var app = angular.module('shopApp', ['ngRoute', 'pageslide-directive']);

    angular.module('shopApp')
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'homepage/main.html',
                    controller: 'productsCtrl'
                })
                .when('/cart', {
                    templateUrl: 'cart/cart.html',
                    controller: 'cartCtrl'
                })
                .when('/order', {
                    templateUrl: 'order/order.html',
                    controller: 'orderCtrl'
                })
                .when('/order/:urlHash', {
                    templateUrl: 'order/order-success.html',
                    controller: 'singleOrderCtrl'
                })
                .when('/catalog', {
                    templateUrl: 'products-list/catalog.html',
                    controller: 'productsCtrl'
                })
                .when('/:catName', {
                    templateUrl: 'products-list/catalog-cat.html',
                    controller: 'categoriesCtrl'
                })
                .when('/catalog/:productId', {
                    templateUrl: 'product-page/product.html',
                    controller: 'productCtrl'
                })

                .otherwise({redirectTo: '/'});

            $locationProvider.html5Mode(true);
        });
    return app;
}());
