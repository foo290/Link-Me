require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose')
const configure = require('./configure');
const middlewares = require('./middlewares/middlewares')
const dbUtils = require('./middlewares/db_utils')
// const logger = require('./logger/logger')
const settings = require('./settings')

const app = express()
// const print = new logger.Logger()

// Configuring middleware and stuffs

const MIDDLEWARES = [
    middlewares.loggerMiddleware,
]

configure.apply_middlewares(app, MIDDLEWARES)

const db = dbUtils.getMongoDB(
    process.env.DATABASE_URL, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
)

app.use(express.json())

const profileRouter = require('./routes/profileRoutes')

app.use('/tree', profileRouter)



app.listen(process.env.EXPRESS_PORT, ()=>{
    console.log(`Server started on port ${process.env.EXPRESS_PORT}...`)
})