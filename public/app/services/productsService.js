(function () {
  angular.module('shopApp')
    .factory('Catalog', ['$http', function ($http) {
      return {
        list: [],
        getProducts: function () {
          var that = this;
          return $http.get('/api/products')
            .success(function (data) {
              that.list = data;
            });
        },

        getProduct: function (productId) {
          return $http.get('/api/products/' + productId);
        }
      };
    }]);
}());
