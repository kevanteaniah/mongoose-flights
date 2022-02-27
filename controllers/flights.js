import mongoose from 'mongoose'
import { Flight } from '../models/flights.js'

function newFlight(req, res){
  res.render('flights/new')
}

function index(req, res){
  Flight.find({}, function(error, flights){
    res.render('flights.index', {
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
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing
  // replace and split if it's not an empty string
  if (req.body.cast) {
		// remove whitespace next to commas
    req.body.cast = req.body.cast.split(', ')
  }
  const movie = new Movie(req.body)
  movie.save(function(err) {
    // one way to handle errors
		if (err) return res.redirect('/flights/new')
    // for now, redirect right back to new.ejs
    res.redirect('/flights/new')
  })
}

export {
  newFlight as new,
  index,
  create,
}