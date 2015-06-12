angular.module('shopApp')
    .controller('productCtrl', function ($rootScope, $scope, $routeParams, Catalog) {

        var productId = $routeParams.productId;

        Catalog.getProduct(productId)
            .success(function (data) {
                $scope.product = data;
                $rootScope.header = data.title;

                $scope.bigImage = data.images[0];
            });

        $scope.setBigImage = function (image) {
            $scope.bigImage = image;
        };


        // Cart ===================

        // Select size method
        $scope.selectedSize = null;
        $scope.selectSize = function (size) {
            $scope.selectedSize = $scope.product.details.sizes[size];
            // console.log($scope.selectedSize);
        }

        $scope.cartProduct = {};
        function addProduct(){
            var product = {};

            product.image = $scope.product.images[0];
            product.title = $scope.product.title;
            product.brand = $scope.product.brand;
            product.size = $scope.selectedSize;
            product.price = $scope.product.pricing.price;
            product.color = $scope.product.details.color;

            $scope.cartProduct = product;

        }

        // Add to cart method
        $scope.addToCart = function(){
            if($scope.selectedSize === null){
                alert('select size!');
            }

            addProduct();
            updateStorageCart($scope.cartProduct);
        }

        function updateStorageCart(data){
            var arr;
            if(localStorage.getItem('cart') === null){
                arr = [];
            } else {
                arr = JSON.parse(localStorage.getItem('cart'));
            }

            arr.push(data);

            console.log(arr);
            localStorage.setItem('cart', JSON.stringify(arr))
        }

        // Test stuff
        // $rootScope.alert = function(msg){
        //     alert(msg);
        // }
        // -----
    });
