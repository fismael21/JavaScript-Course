/**
 * Coding Challenge #2
  Use the BMI example from Challenge #1, and the code you already wrote, and
  improve it.
  Your tasks:
  1. Print a nice output to the console, saying who has the higher BMI. The message
  is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
  2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
  BMI (28.3) is higher than John's (23.9)!"
  Hint: Use an if/else statement 😉
  GOOD LUCK 😀
 */

let markHeight = 1.69;
let markMass = 78;

let johnHeight = 1.95;
let johnMass = 92;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}

console.log(markBMI, johnBMI);

markHeight = 1.88;
markMass = 95;

johnHeight = 1.76;
johnMass = 85;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}
