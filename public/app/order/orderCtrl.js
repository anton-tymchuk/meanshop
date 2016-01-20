(function () {

    angular.module('shopApp')
        .controller('orderCtrl', ['$scope', 'PurchaseFactory', '$location', function ($scope, PurchaseFactory, $location) {
            $scope.orderData = {};

            PurchaseFactory.getCartProducts();
            $scope.orderData.products = PurchaseFactory.cartProducts;

            $scope.orderData.sum = PurchaseFactory.getCartSum('price');
            $scope.orderData.discount = PurchaseFactory.getCartSum('oldPrice');

            $scope.orderData.hash = Math.random().toString(33).substr(2, 30);

            $scope.addOrder = function () {
                PurchaseFactory.createOrder($scope.orderData);

                (function clearCart() {
                    var arr = [];
                    localStorage.setItem('cart', JSON.stringify(arr));
                }());

                console.log($scope.orderData);
                $location.path('/order/' + $scope.orderData.hash);

            };

        }]);
}());
