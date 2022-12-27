"use strict";

function cutFruitPieces(fruits) {
  return fruits * 4;
}

function fruitProcessor(apples, oranges) {
  //Calling a funtion inside a function
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} piece of oranges.`;

  return juice;
}

console.log(fruitProcessor(2, 3));
