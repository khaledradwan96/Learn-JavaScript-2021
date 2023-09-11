/* === */ console.log("===> التكليف 01 <==="); /* === */

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let fName = zName.split(" ")[0];
    let lName = zName.split(" ")[1][0].toUpperCase();
    return `${fName} ${lName}.`;
  }

  function ageWithMessage(zAge) {
    return `${parseInt(zAge)}`;
  }

  function countryTwoLetters(zCountry) {
    return `${zCountry.slice(0, 2).toUpperCase()}`;
  }

  function fullDetails() {
    return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(
      zAge
    )}, You Live In ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

console.log(getDetails("Khaled Radwan", "26 Is My Old", "egypt"));
// Hello Khaled R., Your Age Is 26, You Live In EG

/* === */ console.log("===> التكليف 02 <==="); /* === */

let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

/* === */ console.log("===> التكليف 03 <==="); /* === */

/*
// Reqular Function
function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Available`;
    };
  };
}
*/

// Arrow Function
let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Available`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

/* === */ console.log("===> التكليف 04 <==="); /* === */

function specialMix(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (isNaN(parseInt(data[i]))) continue;
    result += parseInt(data[i]);
  }
  result == 0 ? (result = "All Is Strings") : result;
  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
