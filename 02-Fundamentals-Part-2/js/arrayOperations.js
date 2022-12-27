"use strict";

//Array methods
const friends = ["Andrés", "Lara", "Puerto"];
console.log(friends);
let newFriends = friends.push("Fernando"); //Adds to the end
console.log(newFriends); //Returns the lenght of the new array
console.log(friends);

friends.unshift("Julián"); //Adds to the beginning
console.log(friends);

const removeElement = friends.pop(); //Removes the last element of the array //Returns the removed element
console.log(removeElement);
console.log(friends);

const removeFirstElement = friends.shift(); //Removes the first element of the array
console.log(removeFirstElement);
console.log(friends);

console.log(friends.indexOf("Lara")); //Return the index

console.log(friends.includes("Lara")); //Check if the element is in the array - Strict coercion

if (friends.includes("Lara")) {
  console.log("Hello, Lara!");
}
