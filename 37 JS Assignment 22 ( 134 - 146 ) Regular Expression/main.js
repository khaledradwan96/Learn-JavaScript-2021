/* === */ console.log("===> التكليف 01 <==="); /* === */

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let ipRe = /\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi;
console.log(ip.match(ipRe));

/* === */ console.log("===> التكليف 01 حل آخر <==="); /* === */

let ipRe2 = /\d{4}:\w{3}(:\d{4}){6}/gi;
console.log(ip.match(ipRe2));

/* === */ console.log("===> التكليف 01 حل آخر3 <==="); /* === */

let ipRe3 = /(\w+|\D+)+/gi;
console.log(ip.match(ipRe3));

/* === */ console.log("===> التكليف 02 <==="); /* === */

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let nameRe = /Os\d*O/gi;
console.log(specialNames.match(nameRe));

/* === */ console.log("===> التكليف 02 حل آخر <==="); /* === */

let nameRe2 = /Os(\d+|)O/gi;
console.log(specialNames.match(nameRe2));

// Output => ['Os10O', 'OsO', 'Os100O']

/* === */ console.log("===> التكليف 03 <==="); /* === */

let phone = "+(995)-123 (4567)";

let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi;
console.log(phone.match(phoneRe));

/* === */ console.log("===> التكليف 03 حل آخر <==="); /* === */

let phoneRe2 = /\D\(\d+\)\D\d+\s\(\d+\)/gi;
console.log(phone.match(phoneRe2));

/* === */ console.log("===> التكليف 04 <==="); /* === */

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*
https   => means it can be http or http
:\/\/   => means :// & (\) is escape character

(?      => means "(" could be exist once or not
:[-\w]+ => means  ":" plus ("-" plus charaters could be one or more)  
\.      => means matches any character, except newline or other line terminators.
)?      => means ")" could be exist once or not

([-\w]+)=> means "-" plus word character or more

\.      => dot
\w+     => word character or more

(?      => means "(" could be exist once or not
:\.\w+  => means ":" plus one word character or more
)?      => means ")" could be exist once or not

\/?     => means "/" could be exist once or not
.*      => means any character could be zero or more

i       => means case-insensitive
*/

/* === */ console.log("===> التكليف 05 <==="); /* === */

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let dateRe = /\d+(\D+|\D-\D)\d+(\D+|\D-\D)\d+/g;

console.log(date1.match(dateRe)); // "25/10/1982"
console.log(date2.match(dateRe)); // "25 - 10 - 1982"
console.log(date3.match(dateRe)); // "25 10 1982"
console.log(date4.match(dateRe)); // "25 10 82"

/* === */ console.log("===> التكليف 05 حل آخر <==="); /* === */

let dateRe2 = /\d{2}(\/| - | )\d{2}(\/| - | )\d{2,4}/g;

console.log(date1.match(dateRe2)); // "25/10/1982"
console.log(date2.match(dateRe2)); // "25 - 10 - 1982"
console.log(date3.match(dateRe2)); // "25 10 1982"
console.log(date4.match(dateRe2)); // "25 10 82"

/* === */ console.log("===> التكليف 06 <==="); /* === */

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let urlRe = /(https?:\/\/)?(www.)?\w+.(\w+)\S*/gi;
console.log(url1.match(urlRe));
console.log(url2.match(urlRe));
console.log(url3.match(urlRe));
console.log(url4.match(urlRe));
console.log(url5.match(urlRe));
