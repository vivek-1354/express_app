exports.aboutUs =  (req, res, next) => {
    // this is about.ejs file that we rendering
    res.render("about", {pageTitle: "aboutUs", path: "/aboutus" });
  }