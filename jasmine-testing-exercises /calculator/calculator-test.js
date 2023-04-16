
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
  expect(calculateMonthlyPayment(values2)).toEqual("0.50")
});


it("should return a result with 2 decimal places", function() {
  let zeroCents = {
    amount: 100000,
    years: 10,
    rate: .06,
  }
  expect(calculateMonthlyPayment(zeroCents)).toEqual("1110.21");

  expect(function(){
  let monthlyPayment = document.getElementById("monthly-payment").innerText;
  let decPlace = monthlyPayment.slice(-3).slice(0, 0);
  console.log(decPlace)
  return decPlace;
  }).toEqual(".")
  let testValues = {
    amount: 100000,
    years: 10,
    rate: .06,
  }
  expect(calculateMonthlyPayment(testValues)).toEqual("1110.21");
});

it('should calculate for 0% interest'), function(){
    let zeroInterest = {
    amount: 100000,
    years: 10,
    rate: .0,
  }
  expect(calculateMonthlyPayment(zeroInterest)).toEqual("833.33");
}

afterEach(function(){
//  setupIntialValues();
})
/// etc
