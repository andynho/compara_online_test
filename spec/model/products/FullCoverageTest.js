var assert = require('assert');
var FullCoverage = require("../../../src/model/products/FullCoverage");


describe('FullCoverageTest', function () {
 describe('Validating prices modified', function() {

      it('should not modify price if is equal or over 50', function () {
        var dummyProduct = new FullCoverage(2, 50);
        dummyProduct.modifyPrice();
        assert.equal(dummyProduct.price, 50);
      });

      it('should modify once the price if sellIn date is not expired', function () {
        var dummyProduct = new FullCoverage(2, 30);
        dummyProduct.modifyPrice();
        assert.equal(dummyProduct.price, 31);
      });

      it('should modify twice the price if sellIn date is expired', function () {
        var dummyProduct = new FullCoverage(0, 30);
        dummyProduct.decreaseSellInDate();
        dummyProduct.modifyPrice();
        assert.equal(dummyProduct.price, 32);
      });

  });
});
