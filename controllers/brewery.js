const Brewery = require("../models").Brewery

const getAllBreweries = (req, res) => {
    console.log(req.body)
    Brewery.findAll()
    .then(breweries => {
        res.json(breweries)
    })
}

module.exports = {
    getAllBreweries
}