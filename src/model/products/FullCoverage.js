const Product = require("./Product");

class FullCoverage extends Product {
  constructor(sellIn, price) {
    super("Full Coverage", sellIn, price);
  }

  modifyPrice(){
    if (this.price < 50) {
      this.price = this.price + 1;

      if (this.isExpiredDate()) {
        this.price = this.price + 1;
      }
    }
  }
}

module.exports = FullCoverage;
