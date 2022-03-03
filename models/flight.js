import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: Number,
},{
  timestamps: true
})

const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: {type: Number, min:999, max:999999999},
  departs:{ type: Date, default:Date.now} ,
  tickets: [ticketSchema],
  meals: [{type: Schema.Types.ObjectId, ref: 'Meal'}]
  }, {
    timestamps:true
  }
)


const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight,
}

