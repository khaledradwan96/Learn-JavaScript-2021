/* === */ console.log("===> التكليف 01 <==="); /* === */
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}
/* Output
10
20
30
50
60
70
80
90
100
*/

/* === */ console.log("===> التكليف 02 <==="); /* === */
start = 10;
end = 0;
let stop = 3;

for (let i = start; i >= stop; i--) {
  if (i < start) {
    console.log(`${end}${i}`);
  } else {
    console.log(`${i}`);
  }
}

/* === */ console.log("===> التكليف 02 حل آخر <==="); /* === */
for (let i = start; i > end; i--) {
  if (i < start) {
    console.log(`${end}${i}`);
  } else {
    console.log(`${i}`);
  }
  if (i === stop) break;
}
/* Output
10
09
08
07
06
05
04
03
*/

/* === */ console.log("===> التكليف 03 <==="); /* === */
start = 1;
end = 6;
let breaker = 2;

for (let i = start; i <= end; i++) {
  console.log(i);
  console.log(`-- ${breaker}`);
  console.log(`-- ${end - breaker}`);
}
/* === */ console.log("===> التكليف 03 حل آخر <==="); /* === */

for (let i = start; i <= end; i++) {
  console.log(i);
  for (let j = breaker; j < end; j += breaker) {
    console.log(`-- ${j}`);
  }
}
/* Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/

/* === */ console.log("===> التكليف 04 <==="); /* === */

let index = 10;
let jump = 2;
end = 0;

for (;;) {
  console.log(index);
  index -= jump;
  if (index == jump) break;
}

/* Output
10
8
6
4
*/

/* === */ console.log("===> التكليف 05 <==="); /* === */

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let j = 0;

for (let i = 0; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  }
  for (;;) {
    console.log(`${j + 1} => ${friends[i]}`);
    j++;
    if (j < friends.length) break; // عشان ميحصلشي حلقة تكرار لا نهائية
  }
}

/* === */ console.log("===> التكليف 05 حل آخر <==="); /* === */
let num = 1;
for (let i = 0; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  }
  console.log(`${num} => ${friends[i]}`);
  num++;
}

/* === */ console.log("===> التكليف 05 حل آخر <==="); /* === */
let newArray = [];
for (let i = 0; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  }
  newArray.push(friends[i]);
} // حلقتي التكرار غير متداخلتين
for (let j = 0; j < newArray.length; j++) {
  console.log(`${j + 1} => ${newArray[j]}`);
}

/* Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/

/* === */ console.log("===> التكليف 06 <==="); /* === */

start = 0;
let swappedName = "elZerO";
let result = [];

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result.push(swappedName[i].toUpperCase());
  } else {
    result.push(swappedName[i].toLowerCase());
  }
}
console.log(result.join(""));

/* === */ console.log("===> التكليف 06 حل آخر <==="); /* === */
result = "";
for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase();
  } else {
    result += swappedName[i].toLowerCase();
  }
}
console.log(result);

/* Output
"ELzERo"
*/

/* === */ console.log("===> التكليف 07 <==="); /* === */

start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start; i < mix.length; i++) {
  if (typeof mix[i] == "string" || mix[i] == true) {
    continue;
  }
  console.log(mix[i]);
}

/* === */ console.log("===> التكليف 07 حل آخر <==="); /* === */

for (let i = ++start; i < mix.length; i++) {
  if (typeof mix[i] == "string") {
    continue;
  }
  console.log(mix[i]);
}

/* Output
2
3
4
*/
