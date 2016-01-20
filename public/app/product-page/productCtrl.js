(function () {
    angular.module('shopApp')
        .controller('productCtrl', ['$scope','$routeParams', 'Product', 'PurchaseFactory', function ($scope, $routeParams, Product, PurchaseFactory) {

            // Get product
            Product.get($routeParams.productId);
            $scope.product = Product;
            // Set big image
            $scope.setBigImage = function (image) {
                $scope.product.item.bigImage = image;
            };

            // Select size method
            $scope.selectedSize = null;
            $scope.selectSize = function (index) {
                $scope.selected = index;
                $scope.selectedSize = $scope.product.item.details.sizes[index];
            };

            // Create cart product object
            function addProduct(){
                PurchaseFactory.addToCart($scope.selectedSize);
                PurchaseFactory.updateCart();
            }

            // Add to cart
            $scope.addToCart = function(){
                if($scope.selectedSize === null){
                    alert('select size!');
                }else{
                    addProduct();
                    $scope.closed = false;
                }
            };

        }]);
}());
