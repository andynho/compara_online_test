const Product = require("./Product");

class SpecialFullCoverage extends Product {
  constructor(sellIn, price) {
    super("Special Full Coverage", sellIn, price);
  }

  modifyPrice(){
    if (this.isExpiredDate()) {
        this.price = 0;
    } else {
      this.price = this.price + 1;
      if (this.sellIn < 10) {
          this.price = this.price + 1;
      }
      if (this.sellIn < 5) {
          this.price = this.price + 1;
      }
      if(this.price > 50) {
        this.price = 50;
      }
    }
  }
}

module.exports = SpecialFullCoverage;
