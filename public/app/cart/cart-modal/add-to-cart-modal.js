(function () {
    angular.module('shopApp')
        .directive('addToCartModal', function ($timeout) {
            return {
                restrict: 'E',
                templateUrl: 'app/cart/cart-modal/add-to-cart-modal.html',
                link: function (scope, element, attrs) {
                    scope.closed = true;
                    scope.closeModal = function () {
                        scope.closed = true;
                    };

                    var cartModal = angular.element('.btn');
                    cartModal.on('click', function () {
                        $timeout(scope.closeModal, 3500);
                    });
                }
            };
        });
}());
