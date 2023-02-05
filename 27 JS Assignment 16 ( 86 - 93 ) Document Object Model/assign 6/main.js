// ===> التكليف 06 <===
let numberInput = document.querySelector("[name='elements']");
let textInput = document.querySelector("[name='texts']");
let select = document.querySelector("select");
let resultBox = document.querySelector(".results");

document.forms[0].onsubmit = function (event) {
  event.preventDefault();
  resultBox.innerHTML = "";

  for (let i = 1; i <= numberInput.value; i++) {
    let myElements = document.createElement(select.value);
    myElements.className = "box";
    myElements.title = "Element";
    myElements.setAttribute("id", `id-${i}`);
    myElements.appendChild(document.createTextNode(textInput.value));
    resultBox.appendChild(myElements);
  }
};
