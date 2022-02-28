import mongoose from 'mongoose'
import { Flight } from '../models/flight.js'

function newFlight(req, res){
  res.render('flights/new')
}

function index(req, res){
  Flight.find({}, function(error, flights){
    res.render('flights/index', {
      flights: flights,
      airline: "airline",
      airport: "airport",
      flightNo: "flightNo",
      departs: "departs",
      error: error
    })
  })
}
function create(req, res) {

  const flight = new Flight(req.body)
  flight.save(function(err) {
    console.log(err)
		if (err) return res.render('flights/new')
    
    res.redirect('/flights/new')
  })
}

export {
  newFlight as new,
  index,
  create,
}