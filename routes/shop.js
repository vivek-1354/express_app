const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const proData = require('./admin')

const router = express.Router();

const list = ['Starter', 'Main',' Dinner', 'Dessert']

router.get('/', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  // const data  = proData.product.map(item => res.send(item))
  // for (let pro of proData.product){
  //       res.send(pro)}
  // res.send(proData.product)

  // this is shop.pug file that we rendering
  const products = proData.product
  res.render('shop',{prods: products, pageTitle: 'Shop'})

});

module.exports = router;
