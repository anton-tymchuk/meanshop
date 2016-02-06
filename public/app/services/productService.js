(function () {
  angular.module('shopApp')
    .factory('Product', ['$http', function ($http) {
      return {
        item: {},
        get: function (productId) {
          var that = this;
          return $http.get('/api/products/' + productId)
            .success(function (data) {
              that.item = data;
              that.item.bigImage = data.images[0];
            });
        }
      };
    }]);
}());
