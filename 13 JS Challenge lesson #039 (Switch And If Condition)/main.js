/*
  Switch Challenge
*/

let job = "Developer";
let salary = 0;

switch (job) {
  case "Manager":
    salary = 8000;
    break;
  case "IT":
  case "Support":
    salary = 6000;
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    break;
  default:
    salary = 4000;
}
console.log(`My Salary is ${salary}`);

/*
  If Challenge
*/

let holidays = 0;
let money = 0;

if (holidays === 0) {
  money = 5000;
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
} else if (holidays === 3) {
  money = 2000;
} else if (holidays === 4) {
  money = 1000;
} else {
  money = 0;
}

// Short if solution
holidays === 0
  ? (money = 5000)
  : holidays === 1 || holidays === 2
  ? (money = 3000)
  : holidays === 3
  ? (money = 2000)
  : holidays === 4
  ? (money = 1000)
  : (money = 0);

console.log(`My Money is ${money}`);
