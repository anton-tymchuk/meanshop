(function () {
    angular.module('shopApp')
        .directive('cartInformer', function (PurchaseFactory) {
            return {
                restrict: 'E',
                templateUrl: '../../views/cart-informer.html',
                controller: 'cartCtrl'
            };
        });
}());
