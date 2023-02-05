/* === */ console.log("===> التكليف 01 <==="); /* === */

console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByTagName("div")[0]);
console.log(document.getElementsByName("js")[0]);

console.log(document.querySelector("#elzero"));
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelector(".element"));
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelector("[name='js']"));
console.log(document.querySelectorAll("[name='js']")[0]);
console.log(document.querySelector("div"));
console.log(document.querySelectorAll("div")[0]);

console.log(document.body.children[0]);
console.log(document.body.firstElementChild);
console.log(document.body.childNodes[1]);

// ===> التكليف 02 <===

for (let i = 0; i < 10; i++) {
  document.images[i].src =
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  document.images[i].alt = "Elzero Logo";
  document.images[i].style.backgroundColor = "blue";
}

// ===> التكليف 03 <===

let input = document.querySelector("[name='dollar']");
let output = document.querySelector(".result");

input.oninput = function () {
  output.textContent = `{${input.value}} USD Dollar 
  = {${(input.value * 15.6).toFixed(2)}} Egyptian Pound `;
};

// ===> التكليف 04 <===

let firstDiv = document.querySelector(".one");
let secondDiv = document.querySelector(".two");

firstDiv.title = firstDiv.className;
secondDiv.title = secondDiv.className;

let oneText = secondDiv.textContent;
let twoText = firstDiv.textContent;

firstDiv.textContent = oneText;
secondDiv.textContent = `${twoText} ${++secondDiv.childNodes.length}`;

// ===> التكليف 05 <===

let imges = document.querySelectorAll("#assign05 img");
for (let i = 0; i < imges.length; i++) {
  if (imges[i].alt !== "") {
    imges[i].alt = "Old";
  } else {
    imges[i].alt = "Elzero New";
  }
}
console.log(imges[0]);
