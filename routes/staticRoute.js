const express = require('express');
const url = require('../models/model_url')
const route = express.Router();
const { restrictTo } = require('../middlewares/auth_middle')


route.get('/', restrictTo(['normal', "admin"]), async (req, res) => {
    if (!req.user) return res.redirect('login')

    const Url = await url.find({ cretedBy: req.user._id });
    return res.render('home', { urls: Url })
})

route.get('/admin/urls', restrictTo(['admin']), async (req, res) => {
    console.log(req.body)
    if (!req.user) return res.redirect('login')

    const Url = await url.find({});
    return res.render('home', { urls: Url })
})

route.get('/signup', function (req, res) {
    res.render('signup')
})



route.get('/login', (req, res) => {
    res.render('login')
})

module.exports = route;