(function () {
    angular.module('shopApp')
        .controller('cartCtrl', ['$scope', 'PurchaseFactory', function ($scope, PurchaseFactory) {
            $scope.cartLenght = getCartLenght();

            function cartInit() {
                // Get cart products
                PurchaseFactory.getCartProducts();
                $scope.cartProducts = PurchaseFactory.cartProducts;

                // Count sum of products and discount value
                $scope.priceSum = PurchaseFactory.getCartSum('price');
                $scope.oldPriceSum = PurchaseFactory.getCartSum('oldPrice');
                $scope.saleSize = $scope.oldPriceSum - $scope.priceSum;
                $scope.salePercent = 100 - Math.floor(($scope.priceSum / $scope.oldPriceSum) * 100);
            }

            cartInit();

            // Remove item from cart
            $scope.removeFromCart = function (index) {
                var productIndex = $scope.cartProducts.indexOf($scope.cartProducts[index]);
                PurchaseFactory.removeFromCart(productIndex);
                console.log(PurchaseFactory.cartLenght);
                cartInit();
            };

            function getCartLenght(){
                PurchaseFactory.getCartLenght();
                return PurchaseFactory.cartLenght;
            }

            $scope.$watch(getCartLenght, function (newVal, oldVal) {
                if(newVal !== oldVal)
                    $scope.cartLenght = newVal;
            });

        }]);
}());
