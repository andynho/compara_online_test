var assert = require('assert');
var Product = require("../../../src/model/products/Product");


describe('ProductTest', function () {
 describe('Validating dates', function() {
   var dummyProduct = new Product("Dummy", 2, 3);

      it('should return a sellIn number decreased', function () {
        dummyProduct.decreaseSellInDate()
        assert.equal(dummyProduct.sellIn, 1);
      });

      it('should return false when the date is not expired', function () {
        assert.equal(dummyProduct.isExpiredDate(), false);
      });

      it('should return true when the date is expired', function () {
        dummyProduct.decreaseSellInDate();
        dummyProduct.decreaseSellInDate();
        assert.equal(dummyProduct.isExpiredDate(), true);
      });
  });

  describe('Validating prices modified', function() {

       it('should not decrease if price is equal to 0', function () {
          var dummyProduct = new Product("Dummy", 2, 0);
          dummyProduct.modifyPrice();
          assert.equal(dummyProduct.price, 0);
        });

       it('should decrease price once', function () {
         var dummyProduct = new Product("Dummy", 2, 4);
         dummyProduct.modifyPrice();
         assert.equal(dummyProduct.price, 3);
       });

       it('should decrease twice if sellIn is expired', function () {
         var dummyProduct = new Product("Dummy", 0, 4);
         dummyProduct.decreaseSellInDate();
         dummyProduct.modifyPrice();
         assert.equal(dummyProduct.price, 2);
       });
   });
});
