const express = require('express');

const productController = require('../controllers/products')

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct );

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct );

router.get('/products', productController.adminProducts );

module.exports = router;
