config = {
    PORT: process.env.PORT || 3000,
    DB: 'mongodb://root:123456@ds043952.mongolab.com:43952/shop',
    DB_LOCAL: 'mongodb://localhost/mean_shop_db',
    secret: 'thisisverysevuresecretkey',
    mailer: {
        username: 'hipsta.brands@gmail.com',
        password: '9BK&wbwd)aso9sZQ.cd?='
    }
};

module.exports = config;
