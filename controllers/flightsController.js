const Flights = require('../models/Flights')

module.exports.index = async (req, res) => {
    try {
        let flights = await Flights.find()
        console.log(flights)
        res.render('flights/Index', {flights})
    } catch(err) {
        console.log(err.message)
        res.redirect('/flights')
    }   
}

module.exports.new = (req, res) => {
    const newFlight = new Flights();
    res.render('flights/New', {newFlight})
}

module.exports.create = async (req, res) => {
    console.log('Create new Function')
    try {
        console.log("test1", req.body)
        let flight = await Flights.create(req.body)
        console.log("test2",flight)
    } catch (err) {
        console.log(err.message)
    }

res.redirect('/flights')
}

module.exports.show = async (req, res) => {
    try {
        let flight = await Flights.findById(req.params.id)
        res.render('flights/Show', {flight})
    } catch(err) {
        console.log(err.message)
    }
}

module.exports.update = async (req, res) => {
    console.log('PUT /flights/:id')
    console.log(req.body) 
    try {
        let flights = await Flights.findByIdAndUpdate(req.params.id, { $push: {destinations: req.body} })
        console.log('flights: ', flights)
        

       
        // await Flights.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/flights/${req.params.id}`)
    } catch(err) {
        console.log(err.message)
    }
}