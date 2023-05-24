const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
    airline: String, 
    airport: { type: String, default: "LHR" },
    flightNo: {type: Number, max: 9999, min: 0 },
    departs: Date
});

module.exports = mongoose.model('Flight', flightSchema);