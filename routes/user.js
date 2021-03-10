const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post("/signup", ctrl.user.signUp)
router.get('/', ctrl.user.getAllUsers);
router.post('/login', ctrl.user.confirmLogin);

router.delete("/:index", ctrl.user.deleteUser);

module.exports = router;