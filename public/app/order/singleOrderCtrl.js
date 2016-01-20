(function () {
    angular.module('shopApp')
        .controller('singleOrderCtrl', ['$scope','$routeParams','PurchaseFactory', function ($scope, $routeParams, PurchaseFactory) {

            // Get single product
            PurchaseFactory.getOrder($routeParams.urlHash);
            $scope.product = PurchaseFactory;
            
        }]);
}());
