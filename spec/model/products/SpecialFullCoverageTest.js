var assert = require('assert');
var SpecialFullCoverage = require("../../../src/model/products/SpecialFullCoverage");


describe('SpecialFullCoverage', function () {
 describe('Validating prices modified', function() {

      it('should get price=0 if date expired', function () {
        var dummyProduct = new SpecialFullCoverage(0, 30);
        dummyProduct.decreaseSellInDate();
        dummyProduct.modifyPrice();
        assert.equal(dummyProduct.price, 0);
      });

      it('should increment 1 time if has more than 10 days', function () {
        var dummyProduct = new SpecialFullCoverage(12, 30);
        dummyProduct.modifyPrice();
        assert.equal(dummyProduct.price, 31);
      });

      it('should increment 2 times if has less than 10 days', function () {
        var dummyProduct = new SpecialFullCoverage(8, 30);
        dummyProduct.modifyPrice();
        assert.equal(dummyProduct.price, 32);
      });

      it('should increment 3 times if has more than 5 days', function () {
        var dummyProduct = new SpecialFullCoverage(4, 30);
        dummyProduct.modifyPrice();
        assert.equal(dummyProduct.price, 33);
      });

      it('should not incremet more than 50', function () {
        var dummyProduct = new SpecialFullCoverage(4, 50);
        dummyProduct.modifyPrice();
        assert.equal(dummyProduct.price, 50);
      });
  });
});
