var express = require('express');

var routes = function (Order) {
    var ordersRouter = express.Router();


    // Fetch all orders
    ordersRouter.route('/')
        .get(function (req, res) {
            Order.find({}, function (err, orders) {
                if(err){
                    throw err;
                    return;
                }
                res.json(orders);
            });
        });



    // Create new Order
    var idCount = 0; // count number of orders
    var urlHash; // order url hash

    ordersRouter.use('/new-order', function (req, res, next) {

        // Count orders
        Order.count({}, function(err, count){
            idCount = count;
            console.log('Count is: ' + count);
        });

        // Genereate url hash
        var length = 30;
        urlHash = Math.random().toString(33).substr(2, length);

        next();
    })

    // Add new order
    ordersRouter.route('/new-order')
        .post(function (req, res) {

            var newOrder = new Order({
                customerInfo: {
                    name: req.body.sku,
                    username: req.body.username,
                    phone: req.body.phone,
                    email: req.body.email,
                    address: req.body.address
                },
                orderInfo: {
                    date: new Date,
                    id: idCount,
                    status: 'New',
                    sum: req.body.sum,
                    discount: req.body.discount,
                    delivery: {
                        method: req.body.method,
                        cost: req.body.cost
                    },
                    payment: {
                        deliveryType: req.body.deliveryType,
                        isPaid: false
                    },
                    coupon: req.body.coupon,
                    annotation: req.body.annotation,
                    urlHash: urlHash
                },
                products: [
                    {
                        title: req.body.title,
                        brand: req.body.brand,
                        price: req.body.price,
                        size: req.body.size,
                        image: req.body.image,
                        color: req.body.colot

                    }]
            });

            newOrder.save(function (err) {
                if(err){
                    throw err;
                } else{
                    console.log('Order has been created.')
                }

                res.json({
                    success: true,
                    order: newOrder
                })
            });
        });



    return ordersRouter;
}

module.exports = routes;
