import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const movieSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: date,
})

const Flight = mongoose.model('Flight', flightSchema)

export{
  movieSchema,
}