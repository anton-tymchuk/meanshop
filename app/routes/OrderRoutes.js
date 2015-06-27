var express = require('express');

var routes = function (Order) {
    var ordersRouter = express.Router();
    var orderController = require('../controllers/orderController.js')(Order);
    var token = require('../controllers/tokenController')();

    // Add new Order
    ordersRouter.use('/new-order', function (req, res, next) {
        // Geterate order id
        Order.count({}, function(err, count){
            req.count = count;
            next();
        });

    });

    ordersRouter.route('/new-order')
        .post(orderController.post);

    // Fetch single order
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
        });
    });

    ordersRouter.route('/:orderHash')
        .get(orderController.getOne);

    ordersRouter.use('/', function (req, res, next) {
        token.verifyToken(req, res, next);
    });

    ordersRouter.route('/')
        .get(orderController.get);

    return ordersRouter;
};

module.exports = routes;
