import mongoose from 'mongoose'
import { Flight } from '../models/flights.js'

function newFlight(req, res){
  res.render('flight/new')
}

export {
  newFlight as new,
}