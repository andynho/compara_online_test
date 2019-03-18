class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePrice(){
    this.products.forEach(function(product){
      product.decreaseSellInDate();
      product.modifyPrice();
    });
  }
}

module.exports = CarInsurance;
