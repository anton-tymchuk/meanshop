var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./app/config/config'),
    morgan = require('morgan');

var db = mongoose.connect(config.DB, function (err) {
        if(err) {
            throw err;
        }
        console.log('====== conntected ======');
});

var Product = require('./app/models/Product'),
    Order = require('./app/models/Orders');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));


// Product Api
productRouter = require('./app/routes/ProductRoutes')(Product);
app.use('/api/products', productRouter);

// Catalog Api
catalogRouter = require('./app/routes/CatalogRoutes.js')(Product);
app.use('/api/catalog', catalogRouter);

// Orders Api
ordersRouter = require('./app/routes/OrderRoutes')(Order)
app.use('/api/orders', ordersRouter);

// Front end url
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(config.PORT, function () {
    console.log('App is running on port: ' + config.PORT);
});
