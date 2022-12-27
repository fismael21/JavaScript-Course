const age = 23;
const isOldEnough = age >= 18;

console.log(isOldEnough);

//Conditional
if (isOldEnough) {
  console.log("You can have a driven license");
} else {
  console.log("You cannot have a driven license");
}

let century;

const birthYear = 1999;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
