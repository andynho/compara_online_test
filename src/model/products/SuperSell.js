const Product = require("./Product");

class SuperSell extends Product {
  constructor(sellIn, price) {
    super("Super Sell", sellIn, price);
  }

  modifyPrice(){
    this.price = this.price -2  
    if (this.isExpiredDate()) {
      this.price = this.price -2;
    }
    if (this.price < 0) {
      this.price = 0;
    }
  }
}

module.exports = SuperSell;
