const express = require('express')

const router = express.Router()

const allProducts = require('../controllers/products')
router.get('/products', allProducts.products )

module.exports = router;