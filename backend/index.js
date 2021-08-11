require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const configure = require('./configure');
const middlewares = require('./middlewares/middlewares')
const dbUtils = require('./middlewares/db_utils')
const logger = require('./logger/logger')
const settings = require('./settings')

const app = express()
app.use(express.json())

const print = new logger.Logger()

// Configuring middleware and stuffs

MIDDLEWARES = [
    middlewares.loggerMiddleware,
    // middlewares.ipFilterMiddleware,
    
    // middlewares.excludePathFromMiddleware(
    //     settings.EXCLUDED_PATH_FROM_AUTH_MIDDLEWARE, 
    //     middlewares.authenticateJwtTokenMiddleware
    // ),
    // middlewares.excludePathFromMiddleware(
    //     settings.EXCLUDED_PATH_FROM_AUTH_MIDDLEWARE,
    //     middlewares.isAuthenticatedOrReadOnlyMiddleware
    // ),
    // middlewares.excludePathFromMiddleware(
    //     settings.EXCLUDED_PATH_FROM_AUTH_MIDDLEWARE,
    //     middlewares.onlyAllowActiveUser
    // ),
    
]

configure.apply_middlewares(app, MIDDLEWARES)

db = dbUtils.getMongoDB(
    process.env.DATABASE_URL, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
)

const usersRouter = require('./user_management/routes/userApiEndpoint')
const loginSys = require('./user_management/routes/loginSys')
const profileRouter = require('./routes/profileRoutes')

app.use('/api/cards', profileRouter)
app.use('/api/users', usersRouter)
app.use('/api/auth', loginSys)



const port = process.env.PORT || 3000
app.listen(port, ()=>{
    print.info('Server started...')
})