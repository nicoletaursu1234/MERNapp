require("dotenv").config()
const mongoose = require('mongoose')
const mongoURI=process.env.MONGODB_URI
mongoose
    .connect(mongoURI, 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })
    

const db = mongoose.connection

module.exports = db
