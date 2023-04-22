/*
Functions to test
- sumPaymentTotal
    - payment total correct
- CalculateTipPercent
    - tip percent correct
- appendTd
*/


billTestArray = [100, 700, 500, 90];
tipTestArray = [10, 150, 500, 30];

describe('CalculateTipPercent testing', function(){

    it('should return correct percentage calculation', function(){
        expect(calculateTipPercent(100, 10)).toEqual(10);
        expect(calculateTipPercent(101, 3)).toEqual(3);
    })
})

describe('sumPaymentTotal testing', function(){
    it('should return the correct totals for all components', function(){
        for (let i = 0; i < billTestArray.length; i++){
            billAmtInput.value = billTestArray[i];
            tipAmtInput.value = tipTestArray[i];
            submitPaymentInfo();  
        } 

        billTotal = billTestArray.reduce((a, b) => a+b, 0);
        tipTotal = tipTestArray.reduce((a, b) => a+b, 0);
        tipPercentTotal = 0;
        for (let i = 0; i < billTestArray.length; i++){
            tipPercentTotal += Math.round(100/(billTestArray[i]/tipTestArray[i]))
        }

        expect(sumPaymentTotal('billAmt')).toEqual(billTotal);
        expect(sumPaymentTotal('tipAmt')).toEqual(tipTotal);
        expect(sumPaymentTotal('tipPercent')).toEqual(tipPercentTotal);
    })

})

afterEach( function(){
    allPayments = {};
    paymentId = 0;
});