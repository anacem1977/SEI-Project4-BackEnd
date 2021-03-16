const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.brand.getAllBrands);
router.get('/:index', ctrl.brand.getOneBrand);
router.put("/:index", ctrl.brand.addLike)


module.exports = router;