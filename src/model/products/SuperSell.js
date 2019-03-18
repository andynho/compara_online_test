const Product = require("./Product");

class SuperSell extends Product {
  constructor(sellIn, price) {
    super("Super Sell", sellIn, price);
  }

}

module.exports = SuperSell;
