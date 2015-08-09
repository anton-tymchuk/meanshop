var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    sku: String,
    title: String,
    description: [String],

    brand: String,
    type: String,

    pricing: {
        price: Number,
        oldPrice: Number,
        inStock: String
    },

    details: {
        sizes: [String],
        color: String,
        structure: [String]
    },

    images: [String],
    seo: {
        title: String,
        meta: String,
        keywords: String
    }

});

module.exports = mongoose.model('Product', ProductSchema);
