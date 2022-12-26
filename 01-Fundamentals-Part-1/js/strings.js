const firstName = "Fernando";
const job = "programmer";
const birthYear = 1999;
const year = 2022;

const fernando =
  "I'm " + firstName + ", a " + (year - birthYear) + " old " + job;

console.log(fernando);

//Template literals - ES06

const newFernando = `I'm ${firstName}, a ${year - birthYear} old ${job}`;

console.log(newFernando);

console.log(
  "String\n\
multiple\n\
lines\n\
"
);

console.log(`String
multiple
lines`);
