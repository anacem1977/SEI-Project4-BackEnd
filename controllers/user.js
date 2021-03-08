const User = require("../models").User

const getAllUsers = (req, res) => {
    console.log(req.body)
    User.findAll()
    .then(users => {
        res.json(users)
    })
}

module.exports = {
    getAllUsers
}