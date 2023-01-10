// JS Assignment 15 ( 79 - 85 ) Objects And Methods
/* === */ console.log("===> التكليف 01 <==="); /* === */

/* === */ console.log("===> التكليف 01 <==="); /* === */

let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
  },
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

/* === */ console.log("===> التكليف 02 <==="); /* === */

// Method One
let objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = {};
objMethodTwo.property = "Method Two";
console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = new Object({
  property: "Method Three",
});
console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = new Object({});
objMethodFour.property = "Method Four";
console.log(objMethodFour.property); // "Method Four"

// Method Five
let objMethodFive = Object.assign({}, { property: "Method Five" });
objMethodFour.property = "Method Four";
console.log(objMethodFour.property); // "Method Five"

/* === */ console.log("===> التكليف 03 <==="); /* === */

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({ a }, threeNums, twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

/* === */ console.log("===> التكليف 04 <==="); /* === */

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectShort = Object.getOwnPropertyNames(myFavGames);
let objectLength = objectShort.length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${objectShort[i]}`);
  console.log(`The Publisher Is ${myFavGames[objectShort[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[objectShort[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[objectShort[i]].bestThree !== undefined) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[objectShort[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[objectShort[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[objectShort[i]].bestThree.three}`);
  }
  console.log("#".repeat(20));
}

/* === */ console.log("===> التكليف 04 حل آخر <==="); /* === */

// Code One => How To Get Object Length ?
let objectLength2 = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength2; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${Object.values(myFavGames)[i].publisher}`);
  console.log(`The Price Is ${Object.values(myFavGames)[i].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (Object.values(myFavGames)[i].bestThree !== undefined) {
    console.log("- Game Has Releases");
    console.log(`First => ${Object.values(myFavGames)[i].bestThree.one}`);
    console.log(`Second => ${Object.values(myFavGames)[i].bestThree.two}`);
    console.log(`Third => ${Object.values(myFavGames)[i].bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// Ouput

("The Game Name Is Trinity Universe");
("The Publisher Is NIS America");
("The Price Is 40");
("####################");
("The Game Name Is Titan Quest");
("The Publisher Is THQ");
("The Price Is 50");
("- Game Has Releases");
("First => Immortal Throne");
("Second => Ragnarök");
("Third => Atlantis");
("####################");
("The Game Name Is YS");
("The Publisher Is Falcom");
("The Price Is 40");
("- Game Has Releases");
("First => Oath in Felghana");
("Second => Ark Of Napishtim");
("Third => origin");
("####################");
