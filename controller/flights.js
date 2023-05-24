const Flight = require('../models/flight');

module.exports = {
    index,
    create,
    new: newFlight
}

async function index(req, res) {
    let flights = await Flight.find();
    res.render('flights', {flights});
};

function newFlight(req, res) {
    res.render('flights/new');
}

async function create(req, res) {
    await Flight.create(req.body);
    res.redirect('/flights');
}