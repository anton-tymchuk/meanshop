var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AppSchema = new Schema({
    appName: String,
    contacts: {
        mainPhone: String,
        email: String
    },
    payment: {
        name: String
    },
    delivery: [{
        name: String,
        cons: Number,
        description: String,
        freeFrom: Number
    }],
    banners: [{
        name: String,
        description: String,
        Image: String,
        url: String,    
    }]
});

module.exports = mongoose.models('AppSettings', AppSchema);
