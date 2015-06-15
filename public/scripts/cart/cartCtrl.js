angular.module('shopApp')
    .controller('cartCtrl', ['$scope', function ($scope) {
        $scope.cartProducts = JSON.parse(localStorage.getItem('cart'));
        $scope.cartLenght = $scope.cartProducts.length;
    }]);
