'use strict';
(function () {
    angular.module('shopApp')
        .controller('productCtrl', ['$rootScope','$scope','$routeParams', 'Catalog', function ($rootScope, $scope, $routeParams, Catalog) {

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

            // Add to cart section

            // Select size method
            $scope.selectedSize = null;
            $scope.selectSize = function (size) {
                $scope.selectedSize = $scope.product.details.sizes[size];
            }

            // Create cart product object
            var _cartProduct = {};
            function addProduct(){
                var product = {};

                product.image = $scope.product.images[0];
                product.title = $scope.product.title;
                product.brand = $scope.product.brand;
                product.size = $scope.selectedSize;
                product.price = $scope.product.pricing.price;
                product.color = $scope.product.details.color;

                _cartProduct = product;

            }

            // Add to cart method
            $scope.addToCart = function(){
                if($scope.selectedSize === null){
                    alert('select size!');
                }else{
                    addProduct();
                    updateStorageCart(_cartProduct);
                }
            }

            // Set cart array to localStorage
            function updateStorageCart(data){
                var arr;
                if(localStorage.getItem('cart') === null){
                    arr = [];
                } else {
                    arr = JSON.parse(localStorage.getItem('cart'));
                }
                arr.push(data);

                console.log('Products in the cart' + arr);
                localStorage.setItem('cart', JSON.stringify(arr))
            }

        }]);
}());
