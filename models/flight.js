const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new mongoose.Schema({
    destinations: { type: String, enum: ['LHR', 'AUS', 'LAX', 'DEN', 'SAN'] }
});

const flightSchema = new mongoose.Schema({
    airline: String, 
    airport: { type: String, default: "LHR" },
    flightNo: {type: Number, max: 9999, min: 0 },
    departTime: Date,
    destinations: [destinationSchema]
});



module.exports = mongoose.model('destination', destinationSchema);
module.exports = mongoose.model('Flight', flightSchema);