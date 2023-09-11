/* ===== */ console.log("التكليف 01"); /* ===== */

let num = 110;

if (num < 10) {
  console.log("00" + num);
} else if (num >= 10 && num < 100) {
  console.log("0" + num);
} else {
  console.log(num);
}

// Answer with Short Code
num < 10
  ? console.log("00" + num)
  : num >= 10 && num < 100
  ? console.log("0" + num)
  : console.log(num);

/* ===== */ console.log("التكليف 02"); /* ===== */
let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}

if (num1 == str && num1 !== str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}

if (num1 != str2 && num1 !== str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}

if (str != str2 && typeof str == typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

/* ===== */ console.log("التكليف 03"); /* ===== */

let num01 = 10;
let num02 = 30;
let num03 = "30";

if (num03 > num01 && typeof num03 != typeof num02) {
  console.log(
    `${num03} Is Larger Than ${num01} And Type ${typeof num03} Not The Same Type As ${typeof num02}`
  );
}

if (num03 > num01 && num03 == num02 && typeof num03 != typeof num02) {
  console.log(
    `${num03} Is Larger Than ${num01} And Value Is The Same As ${num03} And Type ${typeof num03} Not The Same Type As ${typeof num02}`
  );
}

if (num03 != num01 && typeof num03 != typeof num01 && typeof num03 != num02) {
  console.log(
    `${num03} Value And Type Is Not The Same As ${num01} And Type Is Not The Same As ${num02}`
  );
}
