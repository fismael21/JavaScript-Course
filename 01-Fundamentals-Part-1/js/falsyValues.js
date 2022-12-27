/**
 * 0
 * ""
 * undefined
 * null
 * NaN
 * false
 */

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;

//It's false, so it goes to the else block
if (money) {
  console.log("You have money");
} else {
  console.log("You don't have money");
}

let height = 1.6;

if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is not defined");
}
