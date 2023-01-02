/* ===== */ console.log("التكليف 01"); /* ===== */

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(0, num));
console.log(myFriends.slice(--myFriends.length - num, num));

// Method 3
myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
myFriends.pop();
console.log(myFriends);

// Method 4
myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
num = 3;
myFriends.length = num;
console.log(myFriends);

/* ===== */ console.log("التكليف 02"); /* ===== */

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]

/* ===== */ console.log("التكليف 03"); /* ===== */

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

finalArr = finalArr.concat(arrTwo, arrOne).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

/* ===== */ console.log("التكليف 04"); /* ===== */

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO
console.log(words[website.length][0].slice(website.length).toUpperCase());
// Another Solution
console.log(words.reverse()[0][0].slice(website.length).toUpperCase()); // ZERO

/* ===== */ console.log("التكليف 05"); /* ===== */

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Method 1
if (haystack.includes(needle)) {
  console.log("Found 01");
}
// Method 2
if (haystack.indexOf(needle) != -1) {
  console.log("Found 02");
}
// Method 3
if (haystack.lastIndexOf(needle) != -1) {
  console.log("Found 03");
}

/* ===== */ console.log("التكليف 06"); /* ===== */

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

arr1 = arr1.pop();
console.log(arr1); // X
arr2 = arr2.slice(++arr1.length);
console.log(arr2); // ['F', 'Y']

allArrs = allArrs.concat(arr1, arr2).sort(); // ['F', 'X', 'Y']

console.log(allArrs.join("").toLowerCase()); // fxy

// Another Solution
arr1 = ["A", "C", "X"];
arr2 = ["D", "E", "F", "Y"];
allArrs = [];

allArrs = arr1.concat(arr2).sort();
console.log(allArrs); // ['A', 'C', 'D', 'E', 'F', 'X', 'Y']
console.log(allArrs.join("").slice(arr2.length).toLowerCase()); // fxy
