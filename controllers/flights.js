import mongoose from 'mongoose'
import { Flight } from '../models/flight.js'
import { Meal} from '../models/meal.js'

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
    
    res.redirect(`/flights/${flight._id}`)
  })
}

function show(req,res){
  Flight.findById(req.params.id)
    .populate('tickets')
    .exec(function(err, flight){
      Meal.find({_id: {$nin: flight.ticket}}, function(err, meals) {
        res.render('flights/show', {
          title: 'Flight Detail', 
          flight: flight,
          meals: meals,
        })
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
    console.log("this is",flight)
    flight.tickets.push(req.body)
    flight.save(function(err) {
      console.log(err)
      res.redirect(`/flights/${flight._id}`)
    })
    console.log("After is", flight)
  })
}
function addToMeals(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.meals.push(req.body.mealId)
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
  addToMeals,
}