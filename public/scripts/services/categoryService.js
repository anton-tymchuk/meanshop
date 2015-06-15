'use strict';
(function () {
    angular.module('shopApp')
        .factory('Category',['$http',
            function ($http) {
                var categoryFactory = {};

                categoryFactory.getCategoryList = function () {
                    return $http.get('/api/catalog');
                };
                categoryFactory.getCategory = function (catName) {
                    return $http.get('/api/catalog/' + catName);
                };

                return categoryFactory;
        }]);
}());
