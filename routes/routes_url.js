const express = require('express');
const route = express.Router();
const { genShorturl, convert, history } = require('../controllers/contro_url')

route.post('/gen', genShorturl)

route.get('/se/:id', convert)



route.get('/history/:id', history)

module.exports = route;