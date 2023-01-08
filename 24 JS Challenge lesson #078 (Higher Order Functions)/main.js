/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split("")
  .filter(function (el) {
    return isNaN(el) && el != ",";
  })
  .map(function (el) {
    return el === "_" ? " " : el;
  })
  .reduce(function (acc, current) {
    return acc === current ? acc : acc + current;
  })
  .slice(Number.isInteger(myString), -true);

console.log(solution); // Elzero Web School
