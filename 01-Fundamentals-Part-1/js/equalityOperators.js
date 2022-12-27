//Equality Operators

// ==, ===

const age = 23;

//Strict equality operator
// == It doesn't make type coercion
if (age === 23) {
  console.log("Your age is " + age);
}

// == Makes type coercion
if (age == "23") {
  console.log("Your age is " + age);
}

const favoriteNumber = prompt("What's your favorite number?");
console.log(favoriteNumber);

if (favoriteNumber == 23) {
  console.log("23 is cool");
}

if (favoriteNumber === 23) {
  console.log("23 is cool");
} else if (favoriteNumber === "23") {
  console.log("23 is super cool");
} else {
  console.log(favoriteNumber, typeof favoriteNumber);
}

if (favoriteNumber !== 23) {
  console.log("why not 23?");
}
