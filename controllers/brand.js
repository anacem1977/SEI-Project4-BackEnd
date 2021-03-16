const Brand = require("../models").Brand

const getAllBrands = (req, res) => {
    console.log(req.body)
    Brand.findAll()
    .then(brands => {
        res.json(brands)
    })
}

const getOneBrand = (req, res) => {
    console.log(req.body)
    Brand.findByPk(req.params.index)
    .then(brand => {
        res.json(brand)
    })
}

const addLike = (req, res) => {
    Brand.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(likeAdded => {
        res.json(likeAdded);
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = {
    getAllBrands,
    getOneBrand,
    addLike
}