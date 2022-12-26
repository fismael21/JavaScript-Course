/**
 * --- Most common
 * Number
 * String
 * Boolean
 * --- Least common
 * Undefined
 * Null
 * Symbol (ES2015)
 * BigInt (ES2020)
 *
 * JavaScript has dynamic typing. Data types are determined automatically.
 *
 */

//let javascriptIsFun = true;
//console.log(javascriptIsFun, typeof javascriptIsFun);

//Dynamic typing
let dataType = true;
console.log(dataType, typeof dataType);

dataType = "True";
console.log(dataType, typeof dataType);

dataType = 23;
console.log(dataType, typeof dataType);

dataType = null;
console.log(dataType, typeof dataType);

dataType = undefined;
console.log(dataType, typeof dataType);

//????? Bug?
console.log(typeof null);
