/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Khaled", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Karem",
  "Ameer",
  "Omar",
  "Othman",
  "Kennedy",
  "Amany",
  "Kamal",
  "Samia",
  "Khloud",
  "Anwar",
  "Kasem",
];
let X = 0;

while (myAdmins[X] !== "Stop") {
  X++;
}
document.write(`<div>We Have ${X} Admins</div>`);
document.write(`<hr>`);

for (let i = 0; i < myAdmins.length; i++) {
  document.write(`<div>`);
  if (myAdmins[i] === "Stop") break;
  document.write(`<div>The Admin For Team ${i + 1} is ${myAdmins[i]}</div>`);

  document.write(`<h3>Team Members:</h3>`);

  let k = 1;
  for (j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[i][0]) {
      document.write(`<p>${k++} - ${myEmployees[j]}</p>`);
    }
  }
  document.write(`</div>`);
  document.write(`<hr>`);
}
