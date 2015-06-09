angular.module('shopApp')
    .factory('Catalog',['$http',
        function ($http) {
            var catalogFactory = {};

            catalogFactory.allProducts = function () {
                return $http.get('/api/products');
            };

            catalogFactory.getProduct = function (productId) {
                return $http.get('/api/products/' + productId);
            };

            return catalogFactory;
    }]);
