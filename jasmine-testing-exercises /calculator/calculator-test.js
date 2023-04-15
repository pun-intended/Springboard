
it('should calculate the monthly rate correctly', function () {
  let values1 = {
    amount: 100000,
    years: 10,
    rate: .06,
  }
  let values2 = {
    amount: 100,
    years: 100,
    rate: .06,
  }
  expect(calculateMonthlyPayment(values1)).toEqual("1110.21");
  expect(calculateMonthlyPayment(values2)).toEqual(".50")
});


it("should return a result with 2 decimal places", function() {

});

afterEach(function(){
  setupIntialValues();
})
/// etc
