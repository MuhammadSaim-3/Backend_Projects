const { getUser } = require('../service/sessionauth');


async function checkforauth(req, res, next) {

    const tokencookie = req.cookies?.uid;
    req.user = null
    if (!tokencookie) {
        return next()
    }
    const token = tokencookie
    const user = getUser(token);
    req.user = user;
    return next()

}

function restrictTo(roles) {
    return function (req, res, next) {
        if (!req.user) return res.redirect('/login')
        if (!roles.includes(req.user.role)) return res.end("unAuthroize")
        return next()
    }

}

module.exports = {
    restrictTo,
    checkforauth
}