const shortid = require('shortid')
const Url = require('../models/model_url')

async function genShorturl(req, res) {
    const body = req.body;
    if (!body) return res.status(400).json({ error: "url is required" })
    const shortID = shortid()
    await Url.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
        cretedBy: req.user._id,
    })

    return res.render('home', { id: shortID })

}

async function convert(req, res) {
    const shortId = req.params.id;
    const entry = await Url.findOneAndUpdate({

        shortId
    }, {
        $push: {
            visitHistory: { timestamp: Date.now() }
        },
    })
    res.redirect(entry.redirectUrl)
}


async function history(req, res) {
    const shortId = req.params.id;
    result = await Url.findOne({ shortId })
    res.json({ "TotalClicks": result.visitHistory.length })
}



module.exports = {
    genShorturl,
    convert,
    history,
}