/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";
//       01234567890123456

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a[13].toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0, 6) + " " + a.substr(-6)); // Elzero School
// Another Sol With substring
console.log(a.substring(0, 6) + " " + a.substring(11, 17)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  a.charAt(0).toLocaleLowerCase() +
    a.slice(1, a.length - 1).toUpperCase() +
    a.slice(-1).toLowerCase()
); // eLZERO WEB SCHOOl
