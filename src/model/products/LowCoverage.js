const Product = require("./Product");

class LowCoverage extends Product {

  constructor(sellIn, price) {
    super("Low Coverage", sellIn, price);
  }

}

module.exports = LowCoverage;
