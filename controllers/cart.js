exports.allCarts = (req, res, next) => {
    res.render("shop/cart", {pageTitle: "Cart page", path: "/cart" });
  // this is cart.ejs file that we rendering
};