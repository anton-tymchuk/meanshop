var jwt = require('jsonwebtoken');
var superKey = 'thisisthesecretkey';

var token = function () {

    var createToken = function (user) {
        return jwt.sign(user, superKey, {expiresInMinutes: 1440});
    };

    var verifyToken = function (req, res, callback) {

        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        if (token) {
            jwt.verify(token, superKey, function (err, decoded) {
                if(err){
                    return res.json({success: false, message: 'Fail to authenticate!'});
                } else{
                    req.decoded = decoded;
                    callback();
                }
            });
        } else {
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });
        }
    };

    var tokenTest = function () {
        return 'Tokek is ok!';
    };

    return{
        createToken: createToken,
        verifyToken: verifyToken,
        tokenTest: tokenTest
    };
};

module.exports = token;
