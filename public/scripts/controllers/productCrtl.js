angular.module('shopApp')
    .controller('productCtrl', function ($scope, $routeParams, Catalog) {
        var productId = $routeParams.productId;
        Catalog.getProduct(productId)
            .success(function (data) {
                $scope.product = data;
            });
    });
