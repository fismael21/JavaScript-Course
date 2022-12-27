//Ternary operator
const age = 23;
age >= 18
  ? console.log("I like to drink coffee")
  : console.log("I like to drink water");

//Can return an expression
const drink = age >= 18 ? "coffee" : "water";

console.log(drink);

console.log(`I like to drink ${age >= 18 ? "coffee" : "water"}`);
