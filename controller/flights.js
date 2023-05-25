const Flight = require('../models/flight');

module.exports = {
    index,
    create,
    new: newFlight,
    show,
    showEditPage,
    update,

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
        const flight = await Flight.findById(id);
        res.render('flights/edit', { title: `Edit ${flight.airline} | ${flight.flightNo}`, flight });
    } catch(err) {
       
    }
}

async function update(req, res, next) {
    try {
        const{ id } = req.params;
        const updatedFlight = await Flight.findById(id);
            const body = {
            ...req.body, 
            airline: req.body.airline.trim(), 
            flightNo: req.body.flightNo.trim(),
            airport: req.body.airport.trim(),
            departTime: req.body.departTime,
        }
        Object.assign(updatedFlight, body);
        await updatedFlight.save();
        res.redirect(`/flights/${id}`);
    } catch (err) {
        console.log(err);
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