const jwt = require('jsonwebtoken');
const secret = "do'ntshareit"

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,
    }, secret)
}


function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        return null; // or throw an error, depending on the application's requirements
    }
}

module.exports = {
    setUser,
    getUser,
};