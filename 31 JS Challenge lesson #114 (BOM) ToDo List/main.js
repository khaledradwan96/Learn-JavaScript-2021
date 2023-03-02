let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Array To Store The Tasks
let arrayOfTasks = [];
// Check if There are Tasks In Local Storage
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}
getDataFromLocalStorage();

// Add Task
submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value); // Add Task To Array
    input.value = ""; // Empty Input Field
  }
};

// Click On Task Element
tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    // Remove Element From Page
    e.target.parentElement.remove();
    // Remove Task From Local Storage
    deleteTask(e.target.parentElement.getAttribute("data-id"));
  }
  // Task Element
  if (e.target.classList.contains("task")) {
    e.target.classList.toggle("done");
    toggleStatusTask(e.target.getAttribute("data-id"));
  }
});

function addTaskToArray(taskText) {
  // Task Data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  // Push Task To Array Of Tasks
  arrayOfTasks.push(task);
  // Add Task To Page
  addElementToPage(arrayOfTasks);
  // Add Tasks To Local Storage
  addDataToLocalStorage(arrayOfTasks);
}

function addElementToPage(arrayOfTasks) {
  tasksDiv.innerHTML = ""; // Empty Tasks Div
  // Looping On Array Of Tasks
  arrayOfTasks.forEach((task) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "task";
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    // Check If Task Is Done
    if (task.completed) {
      div.className = "task done";
    }
    // Created Delete Button
    let spanDel = document.createElement("span");
    spanDel.className = "del";
    spanDel.appendChild(document.createTextNode("Delete"));
    div.appendChild(spanDel);
    tasksDiv.appendChild(div);
  });
  // Created Clear All Tasks Button
  let spanClear = document.createElement("span");
  spanClear.appendChild(document.createTextNode("Clear All Tasks"));
  spanClear.style.backgroundColor = "orange";
  spanClear.style.fontSize = "18px";
  tasksDiv.appendChild(spanClear);
  spanClear.onclick = function () {
    tasksDiv.innerHTML = "";
    window.localStorage.removeItem("tasks");
  };
}

function addDataToLocalStorage(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}
function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementToPage(tasks);
  }
}

function deleteTask(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorage(arrayOfTasks);
}
function toggleStatusTask(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false
        ? (arrayOfTasks[i].completed = true)
        : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocalStorage(arrayOfTasks);
}
