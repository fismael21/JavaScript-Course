"use strict";

//Function expression
const calcAge2 = function (birthYear) {
  const age = 2022 - birthYear;
  return age;
};

console.log(calcAge2(1999));

//Arrow function. Don't have the "this" word
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1999, "Fernando"));
