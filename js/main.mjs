if (localStorage.getItem("language") != "indonesia") {
  if (localStorage.getItem("language") != "english") {
    if (localStorage.getItem("language") != "jpn") {
      window.location.replace("/choose-language.html");
    }
  }
}

if (!localStorage.getItem("name")) {
  window.location.replace("/set-name.html");
}

import { Todo } from "./todo.mjs";
import { History } from "./history.mjs";
import { Language } from "./language.mjs";

new Language();
const todo = new Todo();
const history = new History();

// Set name
const name = localStorage.getItem("name");
const nameNavbar = document.getElementById("nameNavbar");
nameNavbar.textContent = name.slice(0, 8);

// Create new To-do
document.forms["formAdd"].onsubmit = function (event) {
  event.preventDefault();
  const todoData = document.forms["formAdd"]["inputTodo"];
  if (todoData.value === "") {
    Language.addNullDataFeedback();
  } else if (todoData.value.length > 50) {
  } else {
    todo.saveToLocal(todoData.value);
    todo;
  }
  document.forms["formAdd"].reset();
};

// create new todo validation
const inputCreate = document.getElementsByName("inputTodo")[0];
inputCreate.onkeyup = () => {
  if (inputCreate.value.length > 50) {
    inputCreate.classList.add("is-invalid");
  } else {
    inputCreate.classList.contains("is-invalid")
      ? inputCreate.classList.remove("is-invalid")
      : "";
  }
};

// Search
const searchInput = document.getElementById("searchInput");
searchInput.onkeyup = function () {
  new Todo();
};
searchInput.onkeydown = function () {
  new Todo();
};

// Delete All To-do
const clearTodo = document.getElementById("delete-all-todo");
clearTodo.onclick = (event) => {
  event.preventDefault();
  todo.deleteAllData();
};

// Button delete click (delete data)
const btnDelete = document.getElementsByName("btnDelete");
const dataName = document.getElementsByClassName("dataName");
btnDelete.forEach((element, i) => {
  btnDelete[i].onclick = function () {
    todo.deleteData(dataName[i].textContent);
  };
});

// Button done click
const btnDone = document.getElementsByName("btnDone");
btnDone.forEach((element, i) => {
  btnDone[i].onclick = function () {
    todo.dataDone(dataName[i].textContent);
  };
});

// Delete All History
const clearHistory = document.getElementById("delete-all-history");
clearHistory.onclick = (event) => {
  event.preventDefault();
  history.deleteAllHistory();
};
