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
            $scope.selectSize = function (index, event) {
                $scope.selected = index;
                $scope.selectedSize = $scope.product.details.sizes[index];
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

                    // Show cart modal -> true
                    $scope.closed = false;
                }
            }

            // Set cart array to localStorage
            function updateStorageCart(data){
                var cartArray;
                if(localStorage.getItem('cart') === null){
                    cartArray = [];
                } else {
                    cartArray = JSON.parse(localStorage.getItem('cart'));
                }
                cartArray.push(data);

                console.log('Products in the cart' + cartArray);
                localStorage.setItem('cart', JSON.stringify(cartArray))
            }

        }]);
}());
