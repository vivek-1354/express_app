const product = require('../models/product')


// This is middleware function that is attacthed to GET '/admin/add-product'
exports.getAddProduct = (req, res, next) => {
    res.render('add-product',{pageTitle:"Add Book",  path:'/admin/add-product'});
}

// This is middleware function that is attacthed to POST '/admin/add-product'
exports.postAddProduct = (req, res, next) => {
    const data = new product.Product(req.body.title, req.body.price);
    data.save();
    res.redirect('/');
}

// This is middleware function that is attacthed to GET '/'
exports.getProduct = (req, res, next) => {
    // this is shop.ejs file that we rendering
    res.render("shop", { prods: product.product, pageTitle: "Shop", path: "/" });
  }

