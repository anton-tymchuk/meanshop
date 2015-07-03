(function(){
    angular.module('shopApp')
        .controller('categoriesCtrl', ['$rootScope', '$scope', '$routeParams', 'Category', function ($rootScope, $scope, $routeParams, Category) {

            var catName = $routeParams.catName;

            // Get products from single category
            Category.getCategory(catName)
                .success(function (data) {
                    $scope.catProducts = data;

                    //TODO: fix this bug
                    $scope.catHeading = data[0].type;
                    $rootScope.header = data[0].type;

                });

            // Create categories and brands listing
            Category.getCategoryList()
                .success(function (data) {
                    $scope.categories = data.categories;
                    $scope.brands = data.brands;
                });
        }]);
}());
