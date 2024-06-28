const express = require('express');
const app = express();
const shortid = require('shortid')
const { connect } = require('./connect')
const port = 8000;
const path = require('path');
const cookieParser = require('cookie-parser')
const { checkforauth, restrictTo } = require('./middlewares/auth_middle')

// routes
const urlroute = require('./routes/routes_url')
const staticRoute = require('./routes/staticRoute')
const userAuth = require('./routes/userAuth_route')

// mongo-db connection

connect().then(() => console.log("db connected")).catch(() => console.log("error while connecting db"))

//middlewares

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(checkforauth)
// ejs setup

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

//routes
// 
// app.use('/user', userAuth)
app.use('/url', restrictTo('normal', "admin"), urlroute)
app.use('/', staticRoute)
app.use('/user', userAuth)

// port
app.listen(port, () => console.log(`start staterd at ${port}`))