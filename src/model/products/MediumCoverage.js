const Product = require("./Product");

class MediumCoverage extends Product {

  constructor(sellIn, price) {
    super("Medium Coverage", sellIn, price);
  }

}

module.exports = MediumCoverage;
