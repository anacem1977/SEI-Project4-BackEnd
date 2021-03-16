const Brand = require("../models").Brand

const getAllBrands = (req, res) => {
    console.log(req.body)
    Brand.findAll()
    .then(brands => {
        res.json(brands)
    })
}

// const addLike = (req, res) => {
//     console.log(req.body);
//     Brand.update(req.body, {
//         where: {id: req.params.index},
//         returning: true
//     })
//     .then(likeAdded => {
//         res.json(likeAdded);
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }

module.exports = {
    getAllBrands,
    // addLike
}