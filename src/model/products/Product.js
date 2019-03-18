class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  modifyPrice(){
    if (this.price > 0) {
      this.price = this.price -1;
      if (this.isExpiredDate() && this.price > 0) {
        this.price = this.price -1;
      }
    }
  }

  decreaseSellInDate() {
    this.sellIn = this.sellIn - 1;
  }

  isExpiredDate() {
    if (this.sellIn < 0) {
      return true;
    }
    return false;
  }
}

module.exports = Product;
