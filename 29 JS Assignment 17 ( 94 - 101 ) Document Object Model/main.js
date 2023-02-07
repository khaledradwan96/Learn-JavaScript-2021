// ======> التكليف 02
let addClasses = document.querySelector(".classes-to-add");
let removeClasses = document.querySelector(".classes-to-remove");
let current = document.querySelector("[title='Current'");
let result = document.querySelector(".classes-list div");

// Add & Remove Classes Function
function addAndRemove() {
  // Add Classes
  if (addClasses.value) {
    let addClassesList = addClasses.value.toLowerCase().split(" ");
    for (let i = 0; i < addClassesList.length; i++) {
      if (addClassesList[i] === "") {
        continue;
      }
      current.classList.add(addClassesList[i]);
    }
    addClasses.value = "";
  }
  // Remove Classes
  if (removeClasses.value) {
    let removeClassesList = removeClasses.value.toLowerCase().split(" ");
    for (let i = 0; i < removeClassesList.length; i++) {
      if (removeClassesList[i] === "") {
        continue;
      }
      current.classList.remove(removeClassesList[i]);
    }
    removeClasses.value = "";
  }
  showClassesList();
}

// Show Current Classes List Function
function showClassesList() {
  result.innerHTML = "";
  let classesList = current.className.toLowerCase().split(" ").sort();
  if (classesList != "") {
    for (let i = 0; i < classesList.length; i++) {
      let spanClasses = document.createElement("span");
      let spanClassesText = document.createTextNode(classesList[i]);
      spanClasses.appendChild(spanClassesText);
      result.appendChild(spanClasses);
    }
  } else {
    result.textContent = "No Classes To Show";
  }
}
showClassesList();

addClasses.onblur = addAndRemove;
removeClasses.onblur = addAndRemove;

// ======> التكليف 03
let ourElement = document.querySelector(".our-element");

ourElement.nextElementSibling.remove();

let startElement = document.createElement("div");
startElement.className = "start";
startElement.title = "Start Element";
startElement.setAttribute("data-value", "start");
startElement.innerHTML = "Start";

let endElement = document.createElement("div");
endElement.className = "end";
endElement.title = "End Element";
endElement.setAttribute("data-value", "End");
endElement.innerHTML = "End";

ourElement.before(startElement);
ourElement.after(endElement);

// ======> التكليف 04
let elzero = document.getElementsByTagName("div")[7];
console.log(elzero.lastChild.textContent.trim());

// ======> التكليف 05
document.addEventListener("click", function (e) {
  console.log(`This is ${e.target.tagName}`);
});
