let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

/* ========================================= */

let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
  console.log("Good 01");
}

// W Position May Change
if (
  st.charAt(st.indexOf("w")) === "w" ||
  st.charAt(st.indexOf("W")).toLowerCase() === "w"
) {
  console.log("Good 02");
}

if (st.length !== "string") {
  console.log("Good 03");
}

if (typeof Number(st) === "number") {
  console.log("Good 04");
}

if (st.split(" ", 1).toString().repeat(2) === "ElzeroElzero") {
  console.log("Good 05");
}
if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good 05");
}
