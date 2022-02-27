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
    // one way to handle errors
		if (err) return res.render('flights/new')
    // for now, redirect right back to new.ejs
    res.redirect('/flights/new')
  })
}

export {
  newFlight as new,
  index,
  create,
}