/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a, b, c, d))); // 2
console.log(Math.round(Math.min(a, b, c, d))); // 2

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.trunc(d))); // = 100 ** 2 = 10000
console.log(a ** Math.trunc(d));

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));

// Use Variables b + d One Time To Get This Values
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
// = 200 / 3 = 66.66666666666667
console.log(Math.round(Math.trunc(b) / Math.ceil(d))); // 67 => Number
