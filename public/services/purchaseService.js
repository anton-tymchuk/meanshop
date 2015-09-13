(function () {
    angular.module('shopApp')
        .factory('PurchaseFactory', ['Product', '$http', function (Product, $http) {
            return {
                product: {},
                addToCart: function (size) {
                    this.product.image = Product.item.images[0];
                    this.product.title = Product.item.title;
                    this.product.brand = Product.item.brand;
                    this.product.size = size;
                    this.product.price = Product.item.pricing.price;
                    this.product.oldPrice = Product.item.pricing.oldPrice || Product.item.pricing.price;
                    this.product.color = Product.item.details.color;
                },

                // Set cart array to localStorage
                updateCart: function (){
                    var arr;
                    if(localStorage.getItem('cart') === null){
                        arr = [];
                    } else {
                        arr = JSON.parse(localStorage.getItem('cart'));
                    }
                    arr.push(this.product);

                    console.log('Products in the cart: ' + arr);
                    localStorage.setItem('cart', JSON.stringify(arr));
                },
                // Cart
                cartProducts: [],
                cart: {},
                getCartProducts: function () {
                    this.cartProducts = JSON.parse(localStorage.getItem('cart'));
                },

                getCartSum: function (key) {
                    var sum = 0;
                    for(var i = 0, j = this.cartProducts.length; i < j; i++){
                        sum += this.cartProducts[i][key];
                    }
                    this.cart.sum = sum;
                    return sum;
                },

                removeFromCart: function (index) {
                    var arr;
                    arr = JSON.parse(localStorage.getItem('cart'));
                    arr.splice(index, 1);
                    localStorage.setItem('cart', JSON.stringify(arr));
                },

                // Order
                createOrder: function (orderData) {
                    $http.post('/api/orders/new-order', orderData);
                },

                order: {},
                getOrder: function (orderHash) {
                    var that = this;
                    return $http.get('/api/orders/' + orderHash).success(function (data) {
                        that.order = data;
                    });
                },

                // Cart length
                cartLenght: '',
                getCartLenght: function () {
                    var arr = [];
                    arr = JSON.parse(localStorage.getItem('cart'));
                    this.cartLenght = arr.length;
                }
            };
        }]);
}());
