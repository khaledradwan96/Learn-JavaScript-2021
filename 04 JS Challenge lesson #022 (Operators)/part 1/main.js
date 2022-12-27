let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); // 11 + 20 + 80 - 11 = 100

/*
[++a] [+] [+b++] [+] [+c++] [-] [+a++]
=========================================
[++a]
- Value: 11
- Explain: ++ Pre-Increment
-----------------------------------
[+]
- Explain: Add Operator
-----------------------------------
[+b++]
- Value: 20
- Explain: + Unary Plus Operator 
         & ++ Post-Increment
-----------------------------------
[+]
- Explain: Add Operator
-----------------------------------
[+c++]
- Value: 80
- Explain: + Unary Plus Operator 
         & ++ Post-Increment
-----------------------------------
[-]
- Explain: Subtraction Operator
-----------------------------------
[+a++]
- Value: 11
- Explain: + Unary Plus Operator 
         & ++ Post-Increment
*/

console.log(++a + -b + +c++ - -a++ + +a);
/*
last value => a = 12 , b = 21 , c = 81
=========================================
[++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
= 13   +   -21  +    81    -    -13   +    14 = 100
=========================================
[++a]
- Value: 13
- Explain: ++ Pre-Increment
-----------------------------------
[-b]
- Value: -21
- Explain: - Unary Negation Operator 
-----------------------------------
[+c++]
- Value: 81
- Explain: ++ Post-Increment
-----------------------------------
[-a++]
- Value: -13
- Explain: - Unary Negation Operator 
         & ++ Post-Increment
-----------------------------------
[+a]
- Value: 14
- Explain: + Unary Plus Operator 
*/

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
last value => a = 14 , b = 21 , c = 82
=========================================
[--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]
= 81   +    21  +    13   *    21    -   22   *   13  +    12   -     1 
=     102       +        273         -       286      +         11
= 100
*/
