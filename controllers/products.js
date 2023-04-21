const Product = require("../models/product");

// This is middleware function that is attacthed to GET '/admin/add-product'
exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
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
    res.render("shop/product-list", { prods: products, pageTitle: "Shop", path: "/" });
  });
  // this is shop.ejs file that we rendering
};

exports.adminProducts = (req, res, next) => {
    res.render("admin/products", {pageTitle: "Admin Products", path: "/admin/products" });
  // this is shop.ejs file that we rendering
};

exports.products = (req, res, next) => {
    res.render("admin/products", {pageTitle: "Products Page", path: "/products" });
  // this is shop.ejs file that we rendering
};




