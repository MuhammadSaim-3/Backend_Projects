const express = require('express')
const mongoose = require('mongoose');
const route = express.Router();
const { handleSignup, handleUserlogin } = require('../controllers/userAuth_controller')

route.post('/', handleSignup)

route.post('/login', handleUserlogin)
module.exports = route;