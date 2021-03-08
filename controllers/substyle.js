const Substyle = require("../models").Substyle

const getAllSubstyles = (req, res) => {
    console.log(req.body)
    Substyle.findAll()
    .then(substyles => {
        res.json(substyles)
    })
}

module.exports = {
    getAllSubstyles
}