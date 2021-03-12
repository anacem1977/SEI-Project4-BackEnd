const User = require("../models").User

const getAllUsers = (req, res) => {
    console.log(req.body)
    User.findAll()
    .then(users => {
        res.json(users)
    })
}

const confirmLogin = (req, res) => {
    console.log(req.body);
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

const editProfile = (req, res) => { //done
    console.log(req.body);
    User.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(editUser => {
        res.json(editUser);
    })
    .catch((err) => {
        console.log(err)
    })
}

const deleteUser = (req, res) => {
    console.log(req.body)
    User.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.status(200).send("successfully deleted")
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = {
    getAllUsers,
    confirmLogin,
    signUp,
    deleteUser
}