const expect = require('chai').expect;
const CarInsurance = require('../src/model/CarInsurance');
const Product = require('../src/model/products/Product');
const FullCoverage = require('../src/model/products/FullCoverage');
const MegaCoverage = require('../src/model/products/MegaCoverage');
const SpecialFullCoverage = require('../src/model/products/SpecialFullCoverage');
const SuperSell = require('../src/model/products/SuperSell');

const productsAtDayZero = [
  new FullCoverage(2, 0),
  new MegaCoverage(-1, 80),
  new SpecialFullCoverage(15, 20),
  new SuperSell(3, 15),
];

describe("Integration Test", function() {

  const carInsurance = new CarInsurance(productsAtDayZero);

  for (let i = 1; i <= 10; i += 1) {
    carInsurance.updatePrice();
  }

  it("FullCoverage case", function() {
    var fullCoverageObj = carInsurance.products[0];
    expect(fullCoverageObj.price).equal(18);
    expect(fullCoverageObj.sellIn).equal(-8);
  });

  it("MegaCoverage case", function() {
    var megaCoverageObj = carInsurance.products[1];
    expect(megaCoverageObj.price).equal(80);
    expect(megaCoverageObj.sellIn).equal(-1);
  });

  it("SpecialFullCoverage case", function() {
    var specialFullCoverage = carInsurance.products[2];
    expect(specialFullCoverage.price).equal(35);
    expect(specialFullCoverage.sellIn).equal(5);
  });

  it("SuperSell case", function() {
    var superSell = carInsurance.products[3];
    expect(superSell.price).equal(0);
    expect(superSell.sellIn).equal(-7);
  });

});
