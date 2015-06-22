var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    customerInfo: {
        name: String,
        username: String,
        phone: String,
        email: String,
        address: String
    },
    orderInfo: {
        date: Date,
        id: Number,
        status: String,
        sum: Number,
        discount: Number,
        delivery: {
            method: String,
            cost: Number
        },
        payment: {
            method: String,
            isPaid: Boolean
        },
        coupon: String,
        annotation: String,
        urlHash: String
    },
    products: [{
        title: String,
        price: Number,
        brand: String,
        color: String,
        size: String,
        image: String
    }]
});

module.exports = mongoose.model('Order', OrderSchema);
