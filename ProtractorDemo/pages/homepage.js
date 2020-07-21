let homepage = function(){

    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let operator = element(by.model('operator'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.enterFirstNumber = function(firstno){
        firstNumber.sendKeys(firstno);
    };

    this.enterSecondNumber = function(secondno){
        secondNumber.sendKeys(secondno);
    };

    this.clickGoButton = function(){
        goButton.click();
    };

    this.selectOperator = function(value){
        element(by.cssContainingText('option', value)).click();

    };

    this.verifyResult = function(r){
        let resultLabel = element(by.cssContainingText('.ng-binding', r));
        expect(resultLabel.getText()).toEqual(r);
    };
};

module.exports = new homepage();