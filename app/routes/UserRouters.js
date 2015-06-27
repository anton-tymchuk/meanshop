var express = require('express');

var routes = function (User) {
    var userRouter = express.Router();
    var userController = require('../controllers/userController')(User);
    var token = require('../controllers/tokenController')();

    userRouter.route('/sign-up')
        .post(userController.signUp);

    userRouter.route('/login')
        .post(userController.authentication);

    // Fetch users
    userRouter.use('/', function (req, res, next) {
        token.verifyToken(req, res, next);
    });

    userRouter.route('/')
        .get(userController.getUsers);

    return userRouter;
};

module.exports = routes;
