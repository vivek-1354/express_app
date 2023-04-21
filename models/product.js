const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);
// Here we creating helper function that read data from file

function getProductFromFile(cb) {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
}

module.exports = class Product {
  constructor(title, price) {
    this.title = title, 
    this.price = price;
  }

  save() {
    getProductFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log({message : err});
      });
    });
  }

  static fetchAllBook(cb) {
    getProductFromFile(cb);
  }
};
// exports.product = product
