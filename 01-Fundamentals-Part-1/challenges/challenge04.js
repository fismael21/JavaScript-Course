/**
 * Coding Challenge #4
  Steven wants to build a very simple tip calculator for whenever he goes eating in a
  restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
  300. If the value is different, the tip is 20%.
  Your tasks:
  1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
  this. It's not allowed to use an if/else statement π (If it's easier for you, you can
  start with an if/else statement, and then try to convert it to a ternary
  operator!)
  2. Print a string to the console containing the bill value, the tip, and the final value
  (bill + tip). Example: βThe bill was 275, the tip was 41.25, and the total value
  316.25β
  Test data:
  Β§ Data 1: Test for bill values 275, 40 and 430
  Hints:
  Β§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
  Β§ Value X is between 50 and 300, if it's >= 50 && <= 300 π
  GOOD LUCK π
 */

//Data 1

let stevenBill = 275;
let tip =
  stevenBill <= 300 && stevenBill >= 50 ? stevenBill * 0.15 : stevenBill * 0.2;

console.log(
  `The bill value was ${stevenBill}, the tip was ${tip}, and the total value ${
    stevenBill + tip
  }`
);

//Data 2
stevenBill = 40;
tip =
  stevenBill <= 300 && stevenBill >= 50 ? stevenBill * 0.15 : stevenBill * 0.2;

console.log(
  `The bill value was ${stevenBill}, the tip was ${tip}, and the total value ${
    stevenBill + tip
  }`
);

//Data 3

stevenBill = 430;
tip =
  stevenBill <= 300 && stevenBill >= 50 ? stevenBill * 0.15 : stevenBill * 0.2;

console.log(
  `The bill value was ${stevenBill}, the tip was ${tip}, and the total value ${
    stevenBill + tip
  }`
);
