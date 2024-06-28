const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        uniqe: true
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
    cretedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userauths',
    },
}, { timestamps: true })

const Url = mongoose.model('url', urlSchema);

module.exports = Url;