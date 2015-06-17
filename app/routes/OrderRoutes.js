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
                    // TODO: geterete it from mongo
                    id: 1,
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
                    // TODO: meke it random
                    urlHash: 'dDcfdf7dfDFvhdglgl93'
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
        })

    return ordersRouter;
}

module.exports = routes;
