"use strict";

//Loop for

const fernando = [
  "Fernando",
  "Canul",
  23,
  "Software Engineer",
  ["Lara", "Puerto", "Felipe"],
];

let types = [];

for (let i = 0; i < fernando.length; i++) {
  console.log(fernando[i], typeof fernando[i]);
  //types[i] = typeof fernando[i]; One way to add
  types.push(typeof fernando[i]); //Other way
}

console.log(types);

let years = [1999, 2020, 1982, 1977];
let ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

//Continue and break

//Doesn't exit the loop, it just goes to the next iteration
console.log("---ONLY STRINGS---");
for (let i = 0; i < fernando.length; i++) {
  if (typeof fernando[i] !== "string") continue;
  console.log(fernando[i]);
}

//Exit the loop
console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < fernando.length; i++) {
  console.log(fernando[i]);
  if (typeof fernando[i] === "number") break;
}

//Looping backwards
for (let i = fernando.length - 1; i >= 0; i--) {
  console.log(i, fernando[i]);
}

//Loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Exercise number: ${exercise}`);
  for (let repetition = 1; repetition < 6; repetition++) {
    console.log(`Repetition number: ${repetition}`);
  }
}
