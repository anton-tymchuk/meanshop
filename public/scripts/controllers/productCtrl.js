angular.module('shopApp')
    .controller('productCtrl', function ($rootScope, $scope, $routeParams, Catalog) {
        var productId = $routeParams.productId;
        Catalog.getProduct(productId)
            .success(function (data) {
                $scope.product = data;
                $rootScope.header = data.title;
            });
    });
