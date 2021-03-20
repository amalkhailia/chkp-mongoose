// require express
const express = require ('express')

//require dotenv
require("dotenv").config()

// instance of express
const app =express ()

// connect to db
const connectDB = require('./config/connectDB')

//port
const PORT=process.env.PORT 

// creation de serveur
app.listen (PORT, error =>
error ? console.error(error)
:
console.log(`server is running on port ${PORT}...`)
)