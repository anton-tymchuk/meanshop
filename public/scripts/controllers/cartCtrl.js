angular.module('shopApp')
    .controller('cartCtrl', function ($scope) {

        $scope.cartProducts = JSON.parse(localStorage.getItem('cart'));
        $scope.cartLenght = $scope.cartProducts.length;
        console.log($scope.cartProducts);
    });

console.log('Cart controller is ok!');
