const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
const port = 3000;

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const aboutRoutes = require("./routes/about");
const cartRoutes = require("./routes/cart");
const pageNotFound = require("./controllers/PageNotFound");
const products = require("./routes/product");

app.use(bodyParser.urlencoded({ extended: false }));

// This line of code serve a static folder "public" that is available for entire application
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes); // GET '/admin/add-product'
app.use("/admin", adminRoutes); // POST '/admin/add-product'
app.use(shopRoutes); // "/"
app.use(aboutRoutes); // "/aboutus"
app.use(cartRoutes); // "/cart"
app.use(products); // "/products"

// const allUser = []
app.get("/login", (req, res) => {
    res.render("login", {
        path: "/login",
        pageTitle: "login"
    });
}); // "/login"

const allUser = []

app.post("/login", (req, res) => {
    allUser.push({
        username: req.body.username,
        password: req.body.password
    })
    // console.log(allUser)
    res.redirect('/allusers')
}); // "/login"

app.get('/allusers', (req, res)=>{
    res.render("allusers" ,{users: allUser, pageTitle: "All Users" , path:'/allusers'})
})
app.use(pageNotFound.pageNotFound);

app.listen(port, () => {
    console.log(`App running... http://localhost:${port}`);
});
