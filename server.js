var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./app/config/config'),
    multer  = require('multer'),
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
app.use(multer({
    dest: './public/uploads/',
    putSingleFilesInArray: true,
    rename: function (fieldname, filename) {
        return filename.replace(/\W+/g, '-').toLowerCase() + Date.now();
    },
    onFileUploadStart: function (file) {
        if (file.extension !== 'jpg') {
            console.log('invalid file');
            return false;
        }
        console.log(file.fieldname + ' is starting ...');
    },
    onFileUploadData: function (file, data) {
        console.log(data.length + ' of ' + file.fieldname + ' arrived');
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path);
    }
}));

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
