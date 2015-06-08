angular.module('shopApp')
    .factory('Catalog',['$resource',
        function ($resource) {

            return $resource('/products/products.json', {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            });
    }]);
