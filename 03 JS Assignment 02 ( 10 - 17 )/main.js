// التكليف الأول
let numberOne = 10,
  numberTwo = 20;

// console.log(numberOne + numberTwo); => 30
console.log(numberOne + "" + numberTwo); // 1020
console.log(typeof (numberOne + "" + numberTwo)); // string

console.log(`${numberOne}${numberTwo}`); // 1020
console.log(typeof `${numberOne}${numberTwo}`); // string

console.log(numberTwo + "\n" + numberOne);
/* 20
   10
*/

console.log(`${numberTwo}
${numberOne}`);
/* 20
   10
*/

// التكليف الثاني
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// التكليف الثالث
console.log(
  '`I\'m In \n \\\\ \n Love \\\\ """ \'\'\' \n ++ With ++ \n \\"""\\""" \n ""JavaScript""``'
);

console.log(`\`I'm In
\\\\
Love \\\\ """ '''
++ With ++
\\"""\\"""
""JavaScript""\``);

/*
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``
*/

// التكليف الرابع
let a = 21;
let b = 20;
// _21_2021_2021_2021_20_
console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}`); // ليس حل صائب
console.log(`_${`${a}_${b}`.repeat(4)}`);
console.log(`_${a}_${`${b}${a}_`.repeat(3)}${b}`);
