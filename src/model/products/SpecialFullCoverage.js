const Product = require("./Product");

class SpecialFullCoverage extends Product {
  constructor(sellIn, price) {
    super("Special Full Coverage", sellIn, price);
  }

}

module.exports = SpecialFullCoverage;
