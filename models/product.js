const product = []
exports.Product = class Product {
    constructor(title, price){
        this.title = title,
        this.price = price
    }
    
    save(){
        product.push({title: this.title, price : this.price})
        console.log(this.title, this.price)
    }
  
}

exports.product = product