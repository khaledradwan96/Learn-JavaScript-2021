/* === */ console.log("===> التكليف 01 <==="); /* === */

let promptMsg = prompt("Print Nmber From - To", "Example: 5-20").split("-");
let firstValue = +promptMsg[0];
let lastValue = +promptMsg[1];

if (firstValue < lastValue) {
  for (let i = firstValue; i <= lastValue; i++) {
    console.log(i);
  }
} else {
  for (let i = lastValue; i <= firstValue; i++) {
    console.log(i);
  }
}

/* === */ console.log("===> التكليف 02 <==="); /* === */

setTimeout(popUp, 5000);

function popUp() {
  let popUpElement = document.createElement("div");
  popUpElement.style.cssText = `background-color: #eee; border: 1px solid #ddd;
              width: 300px; text-align: center; position: absolute; top: 50%;
              left: 50%; transform: translate(-50%, -50%); transition: 0.3s;`;
  document.body.appendChild(popUpElement);

  let btn = document.createElement("button");
  btn.style.cssText = `background-color: #fe0000; width: 25px; height: 25px;
                    border-radius: 50%; border: 2px solid white; color: white;
                    font-size: 16px; font-weight: bold;
                    position: absolute; right: -10px; top: -10px;
                    cursor: pointer; `;
  btn.appendChild(document.createTextNode("x"));
  popUpElement.appendChild(btn);

  let popUph3 = document.createElement("h3");
  popUph3.appendChild(document.createTextNode("Welcome"));
  popUpElement.appendChild(popUph3);

  let popUpP = document.createElement("p");
  popUpP.appendChild(document.createTextNode("Always Search"));
  popUpElement.appendChild(popUpP);

  btn.onclick = function () {
    popUpElement.style.display = "none";
  };
  btn.onmouseenter = function () {
    popUpElement.style.backgroundColor = "#0075ff";
    popUpElement.style.color = "white";
  };
  btn.onmouseleave = function () {
    popUpElement.style.backgroundColor = "#eee";
    popUpElement.style.color = "black";
  };
}

/* === */ console.log("===> التكليف 03 & 04 & 05 <==="); /* === */

let elmentDiv = document.createElement("div");
elmentDiv.appendChild(document.createTextNode("10"));
document.body.appendChild(elmentDiv);

function countDown() {
  elmentDiv.innerHTML -= 1;
  if (elmentDiv.innerHTML === "0") {
    clearInterval(counter);
    // location.href = "https://elzero.org/";
  }
  if (elmentDiv.innerHTML === "5") {
    window.open(
      "https://elzero.org/",
      "_blank",
      "width=400,height=400,left=500,top=10"
    );
  }
}
let counter = setInterval(countDown, 1000);
