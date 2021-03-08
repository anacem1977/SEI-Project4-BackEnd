const Brand = require("../models").Brand

const getAllBrands = (req, res) => {
    console.log(req.body)
    Brand.findAll()
    .then(brands => {
        res.json(brands)
    })
}

module.exports = {
    getAllBrands
}