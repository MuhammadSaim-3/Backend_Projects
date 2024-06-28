
const { v4: uuidv4 } = require('uuid');
const { setUser } = require('../service/sessionauth')
const UserModel = require('../models/user_model')
async function handleSignup(req, res) {
    const { email, name, password } = req.body;
    const createUser = await UserModel.create({
        email,
        name,
        password,
    })

    return res.redirect('/login')
}


async function handleUserlogin(req, res) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email, password })
    if (!user) {
        res.render('login')
    }

    const token = setUser(user)
    res.cookie('uid', token)
    return res.redirect('/')



}

module.exports = {
    handleSignup,
    handleUserlogin,
}