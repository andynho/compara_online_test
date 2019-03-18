var assert = require('assert');
var MegaCoverage = require("../../../src/model/products/MegaCoverage");


describe('MegaCoverageTest', function () {
 describe('Validating prices is not modified', function() {

      it('should not modify price or sellIn date', function () {
        var dummyProduct = new MegaCoverage(2, 10);
        dummyProduct.decreaseSellInDate();
        dummyProduct.modifyPrice();
        assert.equal(dummyProduct.price, 10);
        assert.equal(dummyProduct.sellIn, 2);
      });
  });
});
