const assert = require('assert');
const Product = require("../../src/model/products/Product");
const CarInsurance = require("../../src/model/CarInsurance");
const chai = require('chai');
const spies = require('chai-spies');
const expect = require('chai').expect;


chai.use(spies);

describe('CarInsuranceTest', function () {
 describe('Validating call to decreaseSellInDate and modifyPrice methods', function() {

      it('Should call method to decrase sellIn date and to modify price', function () {
        var product = new Product("Dummmy", 3, 30);
        var spyDecreaseSellIn = chai.spy.on(product, 'decreaseSellInDate');
        var spyModifyPrice = chai.spy.on(product, 'modifyPrice');
        var dummyCarInsurance = new CarInsurance([product]);

        dummyCarInsurance.updatePrice();
        expect(spyDecreaseSellIn).to.have.been.called();
        expect(spyModifyPrice).to.have.been.called();
      });

  });

});
