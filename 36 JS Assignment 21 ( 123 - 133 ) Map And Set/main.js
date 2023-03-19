/* === */ console.log("===> التكليف 01 <==="); /* === */

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);
console.log([...setOfNumbers].pop());

/* Needed Output
Set(3) {10, 20, 2}
2
*/

/* === */ console.log("===> التكليف 02 <==="); /* === */

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log([...new Set(myFriends)].sort());

/* Needed Output
(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
*/

/* === */ console.log("===> التكليف 03 <==="); /* === */

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myInfoMap = new Map(Object.entries(myInfo));

console.log(myInfoMap);
console.log(myInfoMap.size);
console.log(myInfoMap.has("role"));

/* Needed Output
Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
3
true
*/

/* === */ console.log("===> التكليف 04 <==="); /* === */

let theNumber = 100020003000;

console.log(+[...new Set([...theNumber.toString()])].sort().join(""));

// Needed Output => 123

/* === */ console.log("===> التكليف 05 <==="); /* === */

let theName = "Elzero";

// [1]
console.log([...theName]);
// [2]
console.log(theName.split(""));
// [3]
console.log([...new Set(theName)]);
// [4]
console.log(Array.from(theName));
// [5]
console.log(Object.assign([], theName));
// [6]
let emptyArray = [];
for (let i = 0; i < theName.length; i++) {
  emptyArray.push(theName[i]);
}
console.log(emptyArray);

// Needed Output => ['E', 'l', 'z', 'e', 'r', 'o']

/* === */ console.log("===> التكليف 06 <==="); /* === */

let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

let nums = chars.filter((el) => typeof el === "number");
let characters = chars.filter((el) => typeof el !== "number");

chars = [...nums, ...characters];
chars.copyWithin(0, nums.length, nums.length * 2);

console.log(chars);

/* Needed Output
chars = ["A", "B", "C", "D", "E", 10, 15, 6];
      => ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
      => ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

chars = ["Z", "Y", "A", "D", "E", 10, 1];
      => ["Z", "Y", "Z", "Y", "A", "D", "E"]
*/

/* === */ console.log("===> التكليف 07 <==="); /* === */

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// [1]
console.log([...numsOne, ...numsTwo]);
// [2]
console.log(numsOne.concat(numsTwo));
// [3]
console.log(Array(...numsOne, ...numsTwo));
// [4]
numsOne.push(...numsTwo);
console.log(numsOne);

// Needed Output => [1, 2, 3, 4, 5, 6]

/* === */ console.log("===> التكليف 08 <==="); /* === */

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * +Math.max(...n2));

// Needed Output => 210
