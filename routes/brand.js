const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.brand.getAllBrands);
router.put("/:index", ctrl.user.addLike)


module.exports = router;