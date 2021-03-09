const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post("/signup", ctrl.user.signUp)
router.get('/', ctrl.user.getAllUsers);
router.get('/login', ctrl.user.confirmLogin)

module.exports = router;