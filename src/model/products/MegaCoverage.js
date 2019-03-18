const Product = require("./Product");

class MegaCoverage extends Product {
  constructor(sellIn, price) {
    super("Mega Coverage", sellIn, price);
  }

}

module.exports = MegaCoverage;
