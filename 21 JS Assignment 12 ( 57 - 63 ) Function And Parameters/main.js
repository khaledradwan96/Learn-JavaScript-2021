/* === */ console.log("===> التكليف 01 <==="); /* === */

function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

/* === */ console.log("===> التكليف 02 <==="); /* === */

function calculate(firstNum, secondNum, operation) {
  let reslut;
  if (secondNum == undefined) {
    reslut = "Second Number Not Found";
  } else if (operation == "add" || operation === undefined) {
    reslut = firstNum + secondNum;
  } else if (operation == "subtract") {
    reslut = firstNum - secondNum;
  } else if (operation == "multiply") {
    reslut = firstNum * secondNum;
  }
  return console.log(reslut);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

/* === */ console.log("===> التكليف 03 <==="); /* === */

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`${theAge * 12} Months`);
    console.log(`${theAge * 52.1786} Weeks`);
    console.log(`${theAge * 365.25} Days`);
    console.log(`${theAge * 365.25 * 24} Hours`);
    console.log(`${theAge * 365.25 * 24 * 60} Minutes`);
    console.log(`${theAge * 365.25 * 24 * 60 * 60} Seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(10); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

/* === */ console.log("===> التكليف 04 <==="); /* === */

function checkStatus(a, b, c) {
  details = [a, b, c];
  for (let i = 0; i < details.length; i++) {
    typeof details[i] == "string"
      ? (user = details[i])
      : typeof details[i] == "number"
      ? (age = details[i])
      : (hire = details[i]);
  }
  hire == true ? (hire = "Availabel") : (hire = "Not Available");
  console.log(`Hello ${user}, Your age is ${age},You Are ${hire} For Hire`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

/* === */ console.log("===> التكليف 05 <==="); /* === */

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

/* === */ console.log("===> التكليف 06 <==="); /* === */
function multiply(...number) {
  let reslut = 1; // الواحد محايد ضربي
  for (let i = 0; i < number.length; i++) {
    if (typeof number[i] == "string") {
      continue;
    }
    reslut *= Math.floor(number[i]);
  }
  return console.log(reslut);
}

multiply(10, 20); // 200
multiply(10, 20, 3); // 600
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
multiply(100.5, "B", -10.5); // -1000
