// Style body
document.body.style.cssText = `
  margin: 0px;
  background-color: rgb(236,236,236);
  font-family: Tahoma, Arial;
`;

// =====> Header Section <=====
let header = document.createElement("header");
header.className = "website-head";
header.style.cssText = `
  display: flex;
  padding: 20px;
  background-color: rgb(255,255,255);
  justify-content: space-between;
  align-items: center;
`;
// Logo Element
let logo = document.createElement("div");
logo.className = "logo";
logo.title = "Website Logo";
logo.style.cssText = `
  font-weight: bold;
  color: rgb(35, 169, 110);
  font-size: 26px;
`;
let logoText = document.createTextNode("Radwan");
logo.appendChild(logoText);
header.appendChild(logo);

// Menu list Element
let menu = document.createElement("ul");
menu.className = "menu";
menu.style.cssText = `
  padding: 0px;
  margin: 0px;
  display: flex;
  gap: 10px;
  list-style: none;
`;
let limenu = ["Home", "About", "Services", "Contact"];
for (let i = 0; i < limenu.length; i++) {
  let li = document.createElement("li");
  let liText = document.createTextNode(limenu[i]);
  li.appendChild(liText);
  menu.appendChild(li);
}
header.appendChild(menu);
document.body.appendChild(header);

// =====> Content Section <=====
let content = document.createElement("div");
content.className = "content";
content.style.cssText = `
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  min-height: calc(100vh - 142px);
  box-sizing: border-box;
`;
// Products Element
for (let i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.className = "product";
  let productText = document.createTextNode("Product");
  product.appendChild(productText);

  let productSpan = document.createElement("span");
  let productSpanNum = document.createTextNode(i + 1);
  productSpan.appendChild(productSpanNum);
  product.prepend(productSpan);

  content.appendChild(product);

  // Style of Product & Product Span
  product.style.cssText = `
    padding: 20px;  
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(221, 221, 221);
    width: calc((100% - 40px) / 3);
    box-sizing: border-box;
    text-align: center;
    color: rgb(136, 136, 136);
    border-radius: 6px;
    cursor: pointer;
  `;
  productSpan.style.cssText = `
    font-size: 40px;
    color: black;
    font-weight: normal;
    display: block;
    margin-bottom: 10px;
    margin-top: 10px;
  `;
  product.onclick = function () {
    product.classList.toggle("checked");
  };
  // Reset Button
  document.addEventListener("click", function (e) {
    if (e.target.className === "reset") {
      product.classList.remove("checked");
    }
  });
}
let btnRest = document.createElement("button");
btnRest.className = "reset";
let btnRestText = document.createTextNode("Rest All Checked");
btnRest.appendChild(btnRestText);
content.appendChild(btnRest);

document.body.appendChild(content);

// =====> Footer Section <=====
let footer = document.createElement("footer");
footer.className = "footer";
footer.style.cssText = `
  background-color: rgb(35, 169, 110);
  font-size: 26px;
  text-align: center;
  padding: 20px;
  color: rgb(255, 255, 255);
`;
let footerText = document.createTextNode("Copyright 2023");
footer.appendChild(footerText);

document.body.appendChild(footer);
