const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const product = []

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

  // Here add-product is add-product.pug file that we are rendering.
  res.render('add-product',{pageTitle:"Add Book"});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  product.push({title: req.body.title, price:req.body.price})
  // product.push(`<h3>${req.body.title}</h3>`)
  // console.log(product)
  // if(res.body){
  //    console.log(req.body)};
  res.redirect('/admin/add-product');
});

exports.router = router;
exports.product = product;
