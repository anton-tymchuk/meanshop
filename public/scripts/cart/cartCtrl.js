'use strict';
(function () {
    angular.module('shopApp')
        .controller('cartCtrl', ['$scope', function ($scope) {


            $scope.cartProducts = JSON.parse(localStorage.getItem('cart'));
            $scope.cartLenght = $scope.cartProducts.length;


            // Set sum of items in cart
            $scope.getSumPrice = function () {
                var sumOfPrice = 0;
                for(var i = 0, j = $scope.cartProducts.length; i < j; i++){
                    sumOfPrice += $scope.cartProducts[i].price;

                }
                $scope.cartSummary = sumOfPrice;
            };

            $scope.getSumPrice();


            // Remove item from cart
            $scope.removeFromCart = function (index) {

                var arr,
                    itemIndex = $scope.cartProducts.indexOf($scope.cartProducts[index])

                arr = JSON.parse(localStorage.getItem('cart'));
                arr.splice(itemIndex, 1);

                localStorage.setItem('cart', JSON.stringify(arr));
                $scope.cartProducts = JSON.parse(localStorage.getItem('cart'));
                $scope.cartLenght = $scope.cartProducts.length;
                $scope.getSumPrice();
            };

        }]);
}());
