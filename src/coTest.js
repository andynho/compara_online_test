
class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].name != 'Full Coverage' && this.products[i].name != 'Special Full Coverage') {
        if (this.products[i].price > 0) {
          if (this.products[i].name != 'Mega Coverage') {
            //this.products[i].price = this.modifyPrice(this.products[i]);
            this.products[i].modifyPrice();
          }
        }
      } else {
          this.products[i].modifyPrice();
      }
      this.products[i].decreaseSellInDate();

      if (this.isExpiredDate(this.products[i])) {
        if (this.products[i].name != 'Full Coverage') {
          if (this.products[i].name != 'Special Full Coverage') {
            //if (this.products[i].price > 0) {
            //  if (this.products[i].name != 'Mega Coverage') {
                // this.products[i].price = this.products[i].price - 1;
            //  }
            //}
          } else {
            this.products[i].modifyPrice();
          }
        } else {
          // if (this.products[i].price < 50) {
          //   this.products[i].price = this.products[i].price + 1;
          // }
            this.products[i].modifyPrice();
        }
      }
    }

    return this.products;
  }

  isExpiredDate(product) {
    if (product.sellIn < 0) {
      return true;
    }
    return false;
  }


}

module.exports = {
  CarInsurance
}
