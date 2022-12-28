"use strict";

//While loop

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

let randomNumber = Math.trunc(Math.random() * 6) + 1;

while (randomNumber !== 6) {
  console.log(`Random number: ${randomNumber}`);
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  if (randomNumber === 6) {
    console.log("Loop is about to end...");
  }
}
