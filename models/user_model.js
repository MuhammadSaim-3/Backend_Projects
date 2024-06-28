const mongoose = require('mongoose');

const useShcema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "normal",
    }
}, { timestamps: true })


const userAuth = mongoose.model('userAuth', useShcema);

module.exports = userAuth;