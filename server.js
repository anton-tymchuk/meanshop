var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./app/config/config');

var db = mongoose.connect(config.DB, function (err) {
        if(err) throw err;
        console.log('====== conntected ======');
    });

var Product = require('./app/models/Product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));


productRouter = require('./app/routes/ProductRoutes')(Product);
app.use('/api/products', productRouter);

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});


app.listen(config.PORT, function () {
    console.log('App is running on port: ' + config.PORT);
});
