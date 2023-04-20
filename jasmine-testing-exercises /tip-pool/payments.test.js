/*
Functions to test
- submitPaymentInfo
    - payment added to table
    - changes reflected in server table
    - changes reflected in summary table
- createCurPayment
    - return valid payment object
- appendPaymentTable
    - payment is added to end of table
- updateSummary
    - change in payment data reflected in summary
*/

describe('submit payment info testing', function(){
    it("should create a valid payment object with bill, tip and tip percent attributes", 
    function(){
        let testPayment = {
            billAmt : 500,
            tipAmt : 50,
            tipPercent : calculateTipPercent(billAmt, tipAmt)
        }

    })
})