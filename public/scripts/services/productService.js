'use strict';

angular.module('shopApp')
    .factory('Product', ['$resource',
        function ($resource) {
            return $resource('/products/:productId.json', {}, {
                query: {
                    method:'GET',
                    params:{productId:'products'}
                }
            });
    }]);
