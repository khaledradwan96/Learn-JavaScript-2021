/*
  Array Challenge
*/

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(0, 4).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.length - [zero].length - [counter].length); // 6 - 1 -1 = 4
console.log([zero].length + counter); // 1 + 3 = 4
console.log(my.slice(zero, [zero].length + counter).reverse());

console.log(my.slice(1, 3).reverse()); // ["Elham", "Mazero"]
console.log(counter); //3
console.log(my.slice([zero].length, counter).reverse());

console.log(my[2].slice(0, 2) + my[1].slice(2)); // "Elzero"
console.log([zero].length + [counter].length); // 2
console.log(counter); // 2
console.log(
  my[[zero].length + [counter].length].slice(
    zero,
    [zero].length + [counter].length
  ) + my[[zero].length].slice([zero].length + [counter].length)
);

console.log(my[1][4] + my[1][5].toUpperCase()); // "rO"
console.log([zero].length); // 1
console.log([zero].length + counter); // 4
console.log([zero].length + [zero].length + counter); // 1 + 4 = 5
console.log(
  my[[zero].length][[zero].length + counter] +
    my[[zero].length][[zero].length + [zero].length + counter].toUpperCase()
);

/* ===== */ console.log("Another Solution with ++ & --"); /* ===== */

zero = 0;
counter = 3;
my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(0, 4).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(zero, ++counter).reverse());
// (counter = 4)

console.log(my.slice(1, 3).reverse()); // ["Elham", "Mazero"]
console.log(my.slice(++zero, --counter).reverse());
// (zero = 1) & (counter = 3)

console.log(my[2].slice(0, 2) + my[1].slice(2)); // "Elzero"
console.log(my[--counter].slice(--zero, counter) + my[++zero].slice(counter++));
// (zero = 1) & (counter = 3)

console.log(my[1][4] + my[1][5].toUpperCase()); // "rO"
console.log(my[zero][++counter] + my[zero][++counter].toUpperCase());

/* ===== */ console.log("Another Solution index of"); /* ===== */

zero = 0;
counter = 3;
my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
my = my.reverse();
let num = "number";

console.log(my); // ['Ameer', 'Gamal', 'Osama', 'Elham', 'Mazero', 'Ahmed']
console.log(my.slice(2)); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(num.indexOf("m")); // 2
console.log(my.slice(num.indexOf("m")));

console.log(my.slice(3, 5)); // ["Elham", "Mazero"]
console.log(num.indexOf("r")); // 5
console.log(my.slice(counter, num.indexOf("r")));

console.log(my[3].slice(0, 2) + my[4].slice(2, 6)); // "Elzero"
console.log(num.indexOf("m")); // 2
console.log(num.indexOf("e")); // 4
console.log(my.length); // 6
console.log(
  my[counter].slice(zero, num.indexOf("m")) +
    my[num.indexOf("e")].slice(num.indexOf("m"), my.length)
);

console.log(my[4][4] + my[4][5].toUpperCase()); // "rO"
console.log(num.indexOf("e")); // 4
console.log(num.indexOf("r")); // 5
console.log(
  my[num.indexOf("e")][num.indexOf("e")] +
    my[num.indexOf("e")][num.indexOf("r")].toUpperCase()
);
