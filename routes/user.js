const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.origins.getAllUsers);


module.exports = router;