var sendMail = require('../controllers/mailerController');
var orderController = function (Order) {

    // Post new order function
    var post = function (req, res) {

        var order = new Order({
            customerInfo: {
                name: req.body.name,
                username: req.body.username,
                phone: req.body.phone,
                email: req.body.email,
                address: req.body.address
            },
            orderInfo: {
                date: new Date(),
                id: req.count,
                status: 'New',
                sum: req.body.sum,
                discount: req.body.discount,
                delivery: {
                    method: req.body.deliveryMethod,
                    cost: req.body.cost
                },
                payment: {
                    method: req.body.paymentMethod,
                    isPaid: false
                },
                coupon: req.body.coupon,
                annotation: req.body.annotation,
                urlHash: req.body.hash
            },
            products: req.body.products
        });

        order.save(function (err) {
            if(err){
                throw err;
            } else{
                console.log('Order has been created.');
            }

            res.json({
                success: true,
                order: order
            });

            sendMail(req);
        });
    };

    // Get all orders function
    var get = function (req, res) {
        Order.find({}, function (err, orders) {
            if(err){
                throw err;
            }
            res.json(orders);
        });
    };

    var getOne = function (req, res) {
        res.json(req.order);
    };

    return {
        post: post,
        get: get,
        getOne: getOne
    };
};

module.exports = orderController;
