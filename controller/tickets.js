const Flight = require('../models/flight');

async function addTicket(req, res, next) {
    const { id } = req.params;
    console.log(req.body)
    try {
        const flight = await Flight.findById(id);
        flight.tickets.push(req.body);
        await flight.save();
    } catch (err) {
        
    }
    res.redirect(`/flights/${id}`);
}

module.exports = {
    addTicket
}