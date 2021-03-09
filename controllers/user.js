const User = require("../models").User

const getAllUsers = (req, res) => {
    console.log(req.body)
    User.findAll()
    .then(users => {
        res.json(users)
    })
}

const confirmLogin = (req, res) => {
    console.log(req.params);
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.json(foundUser)
    })
}

const signUp = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.json(newUser)
    })
}

module.exports = {
    getAllUsers,
    confirmLogin
}