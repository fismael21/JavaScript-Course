"use strict";

//Objects
//The order of the properties doesn't matter
const fernando = {
  firstName: "Fernando", //Propertie
  lastName: "Canul",
  age: 22,
  profession: "Software Engineer",
  friends: ["Lara", "Puerto", "Jake"], //A propertie can be an array
};

//Prints the whole object
console.log(fernando);

//Dot notation
console.log(fernando.firstName);
//Bracket notation
console.log(fernando["firstName"]);

const nameKey = "Name";
console.log(fernando["first" + nameKey]);
console.log(fernando["last" + nameKey]);

/*
const interestedIn = prompt(
  "What do you want to know about Fernando? Choose between firstName, lastName, age, profession, and friends"
);

if (fernando[interestedIn]) {
  console.log(fernando[interestedIn]);
} else {
  console.log(
    "Wrong request. Choose between firstName, lastName, age, profession, and friends"
  );
}
*/

fernando.location = "Mexico";
fernando["twitter"] = "elegido21one";

/**
 * Challenge
 * Fernando has 3 friends, and his best friend is called Jake.
 */

console.log(
  `${fernando.firstName} has ${
    fernando.friends.length
  } friends, and his best friend is called ${
    fernando.friends[fernando.friends.length - 1]
  }`
);
