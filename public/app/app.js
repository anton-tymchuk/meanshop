(function () {
    var app = angular.module('shopApp', ['ngRoute', 'pageslide-directive']);

    angular.module('shopApp')
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/homepage/main.html',
                    controller: 'productsCtrl'
                })
                .when('/cart', {
                    templateUrl: 'app/cart/cart.html',
                    controller: 'cartCtrl'
                })
                .when('/order', {
                    templateUrl: 'app/order/order.html',
                    controller: 'orderCtrl'
                })
                .when('/order/:urlHash', {
                    templateUrl: 'app/order/order-success.html',
                    controller: 'singleOrderCtrl'
                })
                .when('/catalog', {
                    templateUrl: 'app/products-list/catalog.html',
                    controller: 'productsCtrl'
                })
                .when('/:catName', {
                    templateUrl: 'app/products-list/catalog-cat.html',
                    controller: 'categoriesCtrl'
                })
                .when('/catalog/:productId', {
                    templateUrl: 'app/product-page/product.html',
                    controller: 'productCtrl'
                })

                .otherwise({redirectTo: '/'});

            $locationProvider.html5Mode(true);
        });
    return app;
}());
