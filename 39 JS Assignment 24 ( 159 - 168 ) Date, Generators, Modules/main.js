/* === */ console.log("===> التكليف 01 <==="); /* === */

let dateNow = new Date();

let MyBirthday = new Date("August 27 96");

let myOld = dateNow - MyBirthday;

console.log(`${Math.round(myOld / 1000)} Seconds`);
console.log(`${Math.round(myOld / 1000 / 60)} Minutes`);
console.log(`${Math.round(myOld / 1000 / 60 / 60)} Hours`);
console.log(`${Math.round(myOld / 1000 / 60 / 60 / 24)} Days`);
console.log(`${Math.round(myOld / 1000 / 60 / 60 / 24 / 365)} Years`);

/* === */ console.log("===> التكليف 02 <==="); /* === */

let date2 = new Date(0);
date2.setMonth(120);
date2.setHours(0, 0, 1);
console.log(date2);

/* === */ console.log("===> التكليف 03 <==="); /* === */

let date3 = new Date("2022-04-30T18:13:20");
console.log(date3);
let monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(
  `Previous Month Is ${
    monthsNames[date3.getMonth()]
  } And Last Day Is ${date3.getDate()}`
);

/* === */ console.log("===> التكليف 04 <==="); /* === */

MyBirthday = new Date("August 27 96");
console.log(MyBirthday);

MyBirthday = new Date("1996,08,27");
console.log(MyBirthday);

MyBirthday = new Date("1996-08-27");
console.log(MyBirthday);

MyBirthday = new Date("1996-08-27T00:00:00Z");
console.log(MyBirthday);

/* === */ console.log("===> التكليف 05 <==="); /* === */

let start = performance.now();

// Operation
// for (let i = 1; i < 100000; i++) {
//   console.log(i);
// }
// I make code as a comment to can solve the rest of Assigns

let end = performance.now();

let OperationDuration = end - start;
console.log(`Loop Took ${Math.trunc(OperationDuration)} Milliseconds`);

/* === */ console.log("===> التكليف 06 <==="); /* === */

function* gen() {
  let startNum = 14;
  let counter = 0;
  while (true) {
    yield startNum;
    startNum += 140 + counter * 200;
    counter++;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

/* === */ console.log("===> التكليف 06 - حل آخر <==="); /* === */

function* gen2() {
  let index = 14;
  let num = 140;
  let sum = index + num;
  yield index;
  while (true) {
    yield sum;
    num += 200;
    sum += num;
  }
}

generator = gen2();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

/* === */ console.log("===> التكليف 07 <==="); /* === */

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll() {
  yield* new Set(genNumbers());
  yield* new Set(genLetters());
}

generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

/* === */ console.log("===> التكليف 08 <==="); /* === */

// main.js File
import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

/*
// mod-one file
export default function (numOne, numTwo, numThree) {
  return numOne + numTwo + numThree;
}
*/

/*
// mod-two.js File
let a = 10; // Do Not Edit Names
let b = 20; // Do Not Edit Names
let c = 30; // Do Not Edit Names

export { a as numOne, b as numTwo, c as numThree };
*/
