var assert = require('assert');
var SuperSell = require("../../../src/model/products/SuperSell");


describe('SuperSellCoverage', function () {
 describe('Validating prices modified', function() {

      it('should decrease price twice of normal if is not expired', function () {
        var dummyProduct = new SuperSell(4, 50);
        dummyProduct.decreaseSellInDate();
        dummyProduct.modifyPrice();
        assert.equal(dummyProduct.price, 48);
      });

      it('should decrease price twice of normal (4 times) when is expired', function () {
        var dummyProduct = new SuperSell(0, 40);
        dummyProduct.decreaseSellInDate();
        dummyProduct.modifyPrice();
        assert.equal(dummyProduct.price, 36);
      });

      it('should decrease price twice of normal (4 times) when is expired, not less tah 0', function () {
        var dummyProduct = new SuperSell(0, 3);
        dummyProduct.decreaseSellInDate();
        dummyProduct.modifyPrice();
        assert.equal(dummyProduct.price, 0);
      });

  });
});
