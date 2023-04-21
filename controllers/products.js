const Product = require("../models/product");

// This is middleware function that is attacthed to GET '/admin/add-product'
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Book",
    path: "/admin/add-product",
  });
};

// This is middleware function that is attacthed to POST '/admin/add-product'
exports.postAddProduct = (req, res, next) => {
  const data = new Product(req.body.title, req.body.price);
  data.save();
  // res.redirect('/admin/add-product');
  res.redirect("/");
};

// This is middleware function that is attacthed to GET '/'
exports.getProduct = (req, res, next) => {
    Product.fetchAllBook((products) => {
    res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
  });
  // this is shop.ejs file that we rendering
};
