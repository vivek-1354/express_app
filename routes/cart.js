const express = require("express");

const cartController = require('../controllers/cart')

const router = express.Router();

router.get("/cart", cartController.allCarts );

module.exports = router;
