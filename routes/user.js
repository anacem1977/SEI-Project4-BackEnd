const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/login', ctrl.user.confirmLogin)
router.get('/', ctrl.user.getAllUsers);



module.exports = router;