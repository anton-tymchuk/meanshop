angular.module('shopApp')
    .controller('productCtrl', function ($rootScope, $scope, $routeParams, Catalog) {

        var productId = $routeParams.productId;

        Catalog.getProduct(productId)
            .success(function (data) {
                $scope.product = data;
                $rootScope.header = data.title;

                $scope.bigImage = data.images[0];
            });

        $scope.setBigImage = function (image) {
            $scope.bigImage = image;
        };


        // Cart ===================

        $scope.selectedSize = null;

        $scope.selectSize = function (size) {
            $scope.selectedSize = $scope.product.details.sizes[size];
            console.log($scope.selectedSize);
        }

        $scope.addToCart = function () {
            if($scope.selectedSize === null){
                alert('select size!');
            }
            console.log('Added!' + $scope.product.title);
        }

        // Test stuff
        $rootScope.alert = function(msg){
            alert(msg);
        }
        // -----
    });
