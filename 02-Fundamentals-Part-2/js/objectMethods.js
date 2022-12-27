"use strict";

//Methods in objects
const fernando = {
  firstName: "Fernando",
  lastName: "Canul",
  birthday: 1999,
  //age: 22,
  profession: "Software Engineer",
  friends: ["Lara", "Puerto", "Felipe"],
  hasDrivenLicense: true,
  /*
  calcAge: function (birthday) {
    return 2022 - birthday;
  },
  calcAge: function () {
    return 2022 - this.birthday;
  },
  */
  calcAge: function () {
    this.age = 2022 - this.birthday;
    return this.age;
  },
  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      fernando.profession
    }, and he has ${this.hasDrivenLicense ? "a" : "no"} driver's license`;
  },
};

//console.log(fernando.calcAge(1999));
//console.log(fernando["calcAge"](1999));
//console.log(fernando.calcAge(fernando.birthday));
//console.log(fernando["calcAge"](fernando.birthday));
//console.log(fernando.calcAge());

console.log(
  `${fernando.firstName} is a ${fernando.calcAge()} years old ${
    fernando.profession
  }, and he ${
    fernando.hasDrivenLicense ? "has" : "dosen't have"
  } a driven license.`
);

console.log(fernando.age);
console.log(fernando.getSummery());
