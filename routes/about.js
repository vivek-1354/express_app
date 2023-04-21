const express = require("express");

const aboutUsController = require('../controllers/about')

const router = express.Router();

router.get("/aboutus",aboutUsController.aboutUs);

module.exports = router;
