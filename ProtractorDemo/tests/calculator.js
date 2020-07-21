let homepage = require('../pages/homepage')
let commonfunctions = require('../pages/commonfunctions');

describe('demo calculator tests', function(){

    it('addition test', function() {

        commonfunctions.OpenUrl('http://juliemr.github.io/protractor-demo/');
        
        homepage.enterFirstNumber('10');

        homepage.selectOperator('+');

        homepage.enterSecondNumber('20');

        homepage.clickGoButton();
        
        homepage.verifyResult('10');
    });

    it('Subtraction test', function() {
        commonfunctions.OpenUrl('http://juliemr.github.io/protractor-demo/');
        
        homepage.enterFirstNumber('30');

        homepage.selectOperator('-');

        homepage.enterSecondNumber('20');

        homepage.clickGoButton();
        
        homepage.verifyResult('5');
        
    });

});