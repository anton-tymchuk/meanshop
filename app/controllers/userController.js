
function sendResponse(resObj, success, message){
    return resObj.json({
        success: success,
        message: message
    });
}

var userController = function (User) {

    var signUp = function (req, res) {
        var user = new User({
            login: 'creatonio',
            password: '123456',
            admin: true
        });

        user.save(function (err) {
            if(err) {
                throw err;
            }

            console.log('User has been created');

            res.json({
                success:true,
                user: user
            });
        });
    };

    var getAllUsers = function (req,res) {
        User.find({}, function (err, users) {
            if(err){
                throw err;
            }
            res.json(users);
        });
    };

    var userAuth =function (req, res) {
        User.findOne({login: req.body.name}, function (err, user) {
            if (err) {
                throw err;
            }

            console.log(user);
            if(!user){
                sendResponse(res, false, 'User does\'not exist!');
            } else if(user){
                var token = require('../controllers/tokenController')(user);

                // Check password
                if(user.password !== req.body.password){
                    sendResponse(res, false, 'Authentication failed. Wrong password.');
                } else{
                    res.json({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token.createToken(user)
                    });
                }
            }
        });
    };

    return {
        signUp: signUp,
        getUsers: getAllUsers,
        authentication: userAuth
    };
};

module.exports = userController;
