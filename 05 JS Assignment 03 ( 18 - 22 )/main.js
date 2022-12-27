console.log("التكليف 01");
// Replace ? With Arithmetic Operators to equal zero
// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400)

console.log(10 * 20 - (15 % 3) + 190 + 10 - 400); // 0
// Another Solve
console.log(((10 * 20 * 15) % 3) * 190 * 10 * 400); // 0

// ==============================

console.log("التكليف 02");
// Get Value 6
let num = 3;

console.log(num + num); // 3 + 3 = 6
console.log(num * --num); // 3 * 2 = 6
console.log(++num + --num + true); // 3 + 2 + 1 = 6
console.log(++num + ++num - true); // 3 + 4 - 1 = 6
console.log(num * ++num * false + ++num); // 4 * 5 * 0 + 6 = 6
console.log(--num + true); // 5 + 1 = 6
console.log(--num + true + true); // 4 + 1 + 1 = 6
console.log(--num * num - num); // 3 * 3 - 3 = 6
console.log(num ** num / num - num);
// 3 ^ 3 / 3 - 3 = 27 / 3 - 3 = 9 - 3 = 6
console.log((++num * --num) / --num); // 4 * 3 / 2 = 12 / 2 = 6
console.log(num ** (num ** num) / num - num);
// 2 ^ 2 ^ 2 / 2 - 2 = 2 ^ 4 / 2 = 16 / 2 - 2 = 8 - 2 = 6

// ==============================

console.log("التكليف 03");
// Get Value 20
let number = "10";

console.log(+number + +number); // 10 + 10 = 20
console.log(+number * (true + true)); // 10 * ( 1 + 1) = 10 * 2 = 20
console.log(++number + number - true - true); // 11 + 11 - 1 - 1 = 20
console.log(--number + --number + true); // 10 + 9 + 1 = 20
console.log(number * false + ++number + number); // 9 * 0 + 10 + 10 = 20
console.log(number * number - --number * number + true);
// 10 * 10 - 9 * 9 + 1 = 100 - 81 + 1 = 20
console.log(++number + --number + --number - --number); // 10 + 9 + 8 - 7 = 20
console.log(--number * --number - number - number); // 6 * 5 - 5 - 5  = 30 - 10 = 20
console.log(number * number - number); // 5 * 5 - 5 = 20

// ==============================

console.log("التكليف 04");
let points = 10;

points += true + true + true; // points = 10 + 1 + 1 + 1 = 13
console.log(points);

points -= (true + true) * (true + true) + true;
/*
 points = 13 - ((1 + 1) * (1 + 1) + 1) 
        = 13 - (2 * 2 + 1) 
        = 13 - (4 + 1) = 13 - 5 = 8
*/
console.log(points);
