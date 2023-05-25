const Flight = require('../models/flight');

async function addDestination(req, res, next) {
    console.log('STARTING HERE')
    const { id } = req.params;

    try {
        const flight = await Flight.findById(id);
        flight.destinations.push(req.body);
        await flight.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${id}`);
}

module.exports = {
    addDestination
}