const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // this is about.ejs file that we rendering
  res.render("about", {pageTitle: "aboutUs", path: "/aboutus" });
});

module.exports = router;
