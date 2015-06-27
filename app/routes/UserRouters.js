var express = require('express');

var routes = function (User) {
    var userRouter = express.Router();
    var userController = require('../controllers/userController')(User);

    userRouter.route('/sign-up')
        .post(userController.signUp);

    userRouter.route('/login')
        .post(userController.authentication);

    userRouter.route('/')
        .get(userController.getUsers);

    return userRouter;
};

module.exports = routes;
