const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.brand.getAllBrands);


module.exports = router;