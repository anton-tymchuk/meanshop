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

    // Fetch one order
    ordersRouter.use('/:orderHash', function (req, res, next) {
        Order.findOne({'orderInfo.urlHash': req.params.orderHash}, function (err, order) {
            if (err){
                res.status(500).send(err);
            } else if(order) {
                req.order = order;
                next();
            } else {
                res.status(404).send('Order not found');
            }
        })
    })

    ordersRouter.route('/:orderHash')
        .get(function (req, res) {
            res.json(req.order)
        });


    // Create new Order
    var orderHash; // order url hash
    var idCount; // count number of orders

    ordersRouter.use('/new-order', function (req, res, next) {
        // Count orders
        Order.count({}, function(err, count){
            idCount = count;
            next();
        });

        // Genereate url hash
        orderHash = Math.random().toString(33).substr(2, 30);

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
                    urlHash: orderHash
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
