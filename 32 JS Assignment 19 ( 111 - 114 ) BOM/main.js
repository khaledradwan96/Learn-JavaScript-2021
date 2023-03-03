/* === */ console.log("===> التكليف 01 <==="); /* === */

let fontFamily = document.getElementById("fontFamily");
let fontColor = document.getElementById("fontColor");
let fontSize = document.getElementById("fontSize");

fontFamily.onchange = function () {
  document.body.style.fontFamily = fontFamily.value;
  window.localStorage.setItem("fontFamily", fontFamily.value);
};
if (window.localStorage.getItem("fontFamily")) {
  document.body.style.fontFamily = window.localStorage.getItem("fontFamily");
  // Add Selected to Option that Storge In local Storage
  document
    .querySelector(`[value="${window.localStorage.getItem("fontFamily")}"]`)
    .setAttribute("selected", "selected");
}

fontColor.onchange = function () {
  document.body.style.color = fontColor.value;
  window.localStorage.setItem("fontColor", fontColor.value);
};
if (window.localStorage.getItem("fontColor")) {
  document.body.style.color = window.localStorage.getItem("fontColor");
  // Add Selected to Option that Storge In local Storage
  document
    .querySelector(`[value=${window.localStorage.getItem("fontColor")}]`)
    .setAttribute("selected", "selected");
}

fontSize.onchange = function () {
  document.body.style.fontSize = fontSize.value;
  window.localStorage.setItem("fontSize", fontSize.value);
};
if (window.localStorage.getItem("fontSize")) {
  document.body.style.fontSize = window.localStorage.getItem("fontSize");
  // Add Selected to Option that Storge In local Storage
  document
    .querySelector(`[value="${window.localStorage.getItem("fontSize")}"]`)
    .setAttribute("selected", "selected");
}

/* === */ console.log("===> التكليف 02 <==="); /* === */
let userName = document.querySelectorAll("form input")[0];
let userAge = document.querySelectorAll("form input")[1];
let userEmail = document.querySelectorAll("form input")[2];
let favColor = document.getElementById("favColor");

userName.oninput = () => {
  window.sessionStorage.setItem("userName", userName.value);
};
userAge.oninput = () => {
  window.sessionStorage.setItem("userAge", userAge.value);
};
userEmail.oninput = () => {
  window.sessionStorage.setItem("userEmail", userEmail.value);
};
favColor.onchange = () => {
  window.sessionStorage.setItem("favColor", favColor.value);
};

userName.value = window.sessionStorage.getItem("userName");
userAge.value = window.sessionStorage.getItem("userAge");
userEmail.value = window.sessionStorage.getItem("userEmail");
favColor.value = window.sessionStorage.getItem("favColor");
