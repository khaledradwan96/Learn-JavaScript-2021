/* === */ console.log("===> التكليف 01 <==="); /* === */

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mixFuntion = mix
  .map(function (el) {
    return isNaN(el) ? el : "";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(mixFuntion); // Elzero

/* === */ console.log("===> التكليف 02 <==="); /* === */

let myString = "EElllzzzzzzzeroo";

let stringFunction = myString
  .split("")
  .filter(function (el, index, arr) {
    return arr.indexOf(el) === index; // removeing dublicated letters
  })
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(stringFunction); // Elzero

/* === */ console.log("===> التكليف 03 <==="); /* === */

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let arrayFunction = myArray
  .reduce(function (acc, curr) {
    return acc.concat(curr);
  })
  .split("")
  .filter(function (el) {
    return el != ",";
  })
  .join("");

console.log(arrayFunction); // Elzero

// Another Solution

let arrayFunction2 = myArray
  .reduce((acc, curr) => acc.concat(curr), [])
  .join("");

console.log(arrayFunction2); // Elzero

/* === */ console.log("===> التكليف 04 <==="); /* === */

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let numsFunction = numsAndStrings.filter((el) => !isNaN(el)).map((el) => -el);

console.log(numsFunction); //  [-1, -10, 10, 20, -5, -3]

/* === */ console.log("===> التكليف 05 <==="); /* === */

let nums = [2, 12, 11, 5, 10, 1, 99];

let numVlaueFunction = nums.reduce(function (acc, curr) {
  return curr % 2 ? acc + curr : acc * curr;
  // if curr % 2 = 0 (false) => curr is even
}, 1);

console.log(numVlaueFunction); // 500
