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

document.forms["formAdd"].onsubmit = function (event) {
  event.preventDefault();
  const todoData = document.forms["formAdd"]["inputTodo"];
  if (todoData.value === "") {
    todo.hiddenContent(
      "text-success",
      "text-danger",
      "Data tidak boleh kosong!"
    );
  } else {
    todo.saveToLocal(todoData.value);
    todo.hiddenContent(
      "text-danger",
      "text-success",
      "Berhasil menambah data!"
    );
    todo;
  }
  document.forms["formAdd"].reset();
};
