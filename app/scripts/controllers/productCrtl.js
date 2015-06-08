angular.module('shopApp')
    .controller('productCtrl', function ($scope, $routeParams, Product) {
        $scope.product = Product.get({
            productId: $routeParams.productId
        });
    });

console.log('Product Controller - ok!');
