import mongoose from 'mongoose'
import { Flight } from '../models/flight.js'

function newFlight(req, res){
  res.render('flights/new', {
    title: "Add a New Flight"
  })
}

function index(req, res){
  Flight.find({}, function(error, flights){
    res.render('flights/index', {
      title: "Flights",
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

function show(req,res){
  Flight.findById(req.params.id, function(err, flight){
    res.render('flights/show',{
      title: 'Flights Details',
      flight: flight,
    })
  })
}

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.id, function(err, flight){
    res.redirect('/flights')
  }) 
}

function createTicket(req, res){
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  newFlight as new,
  index,
  create,
  show,
  deleteFlight as delete,
  createTicket,
}