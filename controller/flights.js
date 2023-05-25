const Flight = require('../models/flight');

module.exports = {
    index,
    create,
    new: newFlight,
    show,
    showEditPage
}

async function index(req, res) {
    let flights = await Flight.find();
    res.render('flights', {flights});
};

function newFlight(req, res) {
    res.render('flights/new');
}

async function showEditPage(req, res, next) {
    try {
        const { id } = req.params;
        console.log(`ID: ${id}`)
        const flight = await Flight.findById(id);
        res.render(`flights/${id}/edit`, {
            flight,
            airline: flight.airline,
            airport: flight.airport,
            flightNo: flight.flightNo,
            departTime: flight.departTime,
            destination: flight.destinations
        });
    } catch(err) {
        next();
    }
}

async function create(req, res) {
    await Flight.create(req.body);
    res.redirect('/flights');
}


async function show(req, res, next) {
    try {
        const { id } = req.params;
        const flight = await Flight.findById(id);
        res.render('flights/show', {
            flight,
            airline: flight.airline,
            airport: flight.airport,
            flightNo: flight.flightNo,
            departTime: flight.departTime,
            destination: flight.destinations
        })

    } catch(err) {
        next();
    }
}