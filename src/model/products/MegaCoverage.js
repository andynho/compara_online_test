const Product = require("./Product");

class MegaCoverage extends Product {
  constructor(sellIn, price) {
    super("Mega Coverage", sellIn, price);
  }

  modifyPrice(){
  }

  decreaseSellInDate() {  
  }
}

module.exports = MegaCoverage;
