angular.module('shopApp')
    .controller('productCtrl', function ($rootScope, $scope, $routeParams, Catalog) {

        var vm = this;
        var productId = $routeParams.productId;

        Catalog.getProduct(productId)
            .success(function (data) {
                $scope.product = data;
                $rootScope.header = data.title;

                $scope.bigImage = data.images[0];
            });

        $scope.setBigImage = function (image) {
            $scope.bigImage = image;
            console.log('Clicked!');
        };

        // Test stuff
        $rootScope.alert = function(msg){
            alert(msg);
        }
        // -----
    });
