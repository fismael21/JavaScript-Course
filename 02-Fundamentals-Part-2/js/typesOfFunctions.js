"use strict";

//Function declaration
//Can be called before it is defined
function calcAge1(birthYear) {
  const age = 2022 - birthYear;
  return age;
}

const age1 = calcAge1(1999);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
  const age = 2022 - birthYear;
  return age;
};

const age2 = calcAge2(1999);
console.log(age2);
