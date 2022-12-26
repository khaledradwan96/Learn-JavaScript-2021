// التكليف الثاني
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";

// التكليف الثالث
console.log(
  "%cElzero %cWeb %cSchool",
  "color:red; font-size:40px",
  "color:green; font-size:40px; font-weight:bold",
  "background-color:blue; font-size:40px"
);

// التكليف الرابع
console.group("Group 01");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 02");
console.log("Message One");
console.log("Message Two");

// التكليف الخامس
console.table(["Elzero", "Khaled", "Ahmad", "Sameh", "Gamal"]);

// التكليف السادس
// Method One
// console.log("Iam In Console");
// document.write("Iam In Page");

// Method Two
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
