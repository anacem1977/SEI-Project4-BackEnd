const Origin = require("../models").Origin

const getAllOrigins = (req, res) => {
    console.log(req.body)
    Origin.findAll()
    .then(origins => {
        res.json(origins)
    })
}

module.exports = {
    getAllOrigins
}