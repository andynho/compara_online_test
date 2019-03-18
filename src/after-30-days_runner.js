console.log("=================================================");

const Product = require("../src/model/products/Product");
const CarInsurance = require("../src/model/CarInsurance");
const MediumCoverage = require("../src/model/products/MediumCoverage");
const FullCoverage = require("../src/model/products/FullCoverage");
const LowCoverage = require("../src/model/products/LowCoverage");
const MegaCoverage = require("../src/model/products/MegaCoverage");
const SpecialFullCoverage = require("../src/model/products/SpecialFullCoverage");
const SuperSell = require("../src/model/products/SuperSell");

const productsAtDayZero = [
  new MediumCoverage(10, 20),
  new FullCoverage(2, 0),
  new LowCoverage(5, 7),
  new MegaCoverage(0, 80),
  new MegaCoverage(-1, 80),
  new SpecialFullCoverage(15, 20),
  new SpecialFullCoverage(10, 49),
  new SpecialFullCoverage(5, 49),
  new SuperSell(3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  console.log('name, sellIn, price');
  carInsurance.updatePrice();
  carInsurance.products.forEach(productPrinter);
  console.log('');
}

console.log("==================================================");
