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
            deliveryType: String,
            isPaid: Boolean
        },
        coupon: String,
        annotation: String,
        urlHash: String
    },
    products: [{
        name: String,
        price: Number
    }]
});

module.exports = mongoose.model('Order', OrderSchema);
