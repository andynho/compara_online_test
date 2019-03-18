const expect = require('chai').expect;

const CarInsurance = require('../src/model/CarInsurance');
const Product = require('../src/model/products/Product');

describe("Co Test", function() {

  it("should foo", function() {
    const coTest = new CarInsurance([ new Product("foo", 0, 0) ]);
    coTest.updatePrice();
    expect(coTest.products[0].name).equal("foo");
  });

});
