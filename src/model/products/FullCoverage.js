const Product = require("./Product");

class FullCoverage extends Product {
  constructor(sellIn, price) {
    super("Full Coverage", sellIn, price);
  }

}

module.exports = FullCoverage;
