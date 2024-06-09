import { Todo } from "./todo.mjs";

const name = localStorage.getItem("name");
const nameNavbar = document.getElementById("nameNavbar");
nameNavbar.textContent = name;

const language = localStorage.getItem("language");
const indonesia = document.getElementById("ind");
const english = document.getElementById("english");
const jpn = document.getElementById("jpn");

switch (language) {
  case "indonesia":
    indonesia.classList.toggle("active");
    break;
  case "english":
    english.classList.toggle("active");
    break;
  case "jpn":
    jpn.classList.toggle("active");
    break;
}

const todo = new Todo();

// Create new To-do
document.forms["formAdd"].onsubmit = function (event) {
  event.preventDefault();
  const todoData = document.forms["formAdd"]["inputTodo"];
  if (todoData.value === "") {
    todo.feedBack("Tidak bisa menambahkan data kosong!");
  } else if (todoData.value.length > 50) {
  } else {
    todo.saveToLocal(todoData.value);
    todo;
  }
  document.forms["formAdd"].reset();
};

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

// Button delete click (delete data)
const btnDelete = document.getElementsByName("btnDelete");
const dataName = document.getElementsByClassName("dataName");
btnDelete.forEach((element, i) => {
  btnDelete[i].onclick = function () {
    todo.deleteData(dataName[i].textContent);
  };
});
