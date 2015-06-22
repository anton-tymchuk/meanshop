(function () {
    angular.module('shopApp')
        .factory('Category',['$http', function ($http) {
            return{
                getCategoryList: function () {
                    return $http.get('/api/catalog');
                },
                getCategory: function (catName) {
                    return $http.get('/api/catalog/' + catName);
                }
            };
        }]);
}());
