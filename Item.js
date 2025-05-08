const mongoose = require('mongoose');

const itemScheme = new mongoose.Schema({
    itemName: {type: String, require: true},
    description: {type: String, require: true},
    locationFound: {type: String, require: true},
    dateFound: {type: Date, require: true},
    claimed: {type: Boolean, default: false},

}, {timestamps: true});

module.exports = mongoose.model('Item', itemScheme);