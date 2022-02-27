import mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE_URL)

console.log(process.env.DATABASE_URL)