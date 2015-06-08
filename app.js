var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./config/config');

var app = express(),
    db = mongoose.connect(config.DB, function (err) {
        if(err) throw err;
        console.log('==== conntected ======');
    });

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var Product = require('./models/Product');

productRouter = require('./routes/ProductRoutes.js')(Product);

app.get('/', function (req,res) {
    res.send('Works!');
});

app.use('/api/products', productRouter);

app.listen(config.PORT, function () {
    console.log('App is running on port: ' + config.PORT);
});
