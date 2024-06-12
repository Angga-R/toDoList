if (localStorage.getItem("language") != "indonesia") {
  if (localStorage.getItem("language") != "english") {
    if (localStorage.getItem("language") != "jpn") {
      window.location.replace("/choose-language.html");
    }
  }
}

if (localStorage.getItem("name")) {
  window.location.replace("/index.html");
}
import { Language } from "./language.mjs";

const label = document.querySelector("label");
const inputNama = document.querySelector("input");
const feedBack = document.getElementById("feedback");

// label name input
label.textContent = Language.forSetName();

// for validation name
function inputNamaClass(addClass, removeClass) {
  inputNama.classList.add(addClass);
  inputNama.classList.remove(removeClass);
}

// validation name
inputNama.addEventListener("keyup", () => {
  if (inputNama.value.length > 8) {
    inputNamaClass("is-invalid", "is-valid");
    feedBack.textContent = Language.feedbackForName("8chara");
  } else if (inputNama.value === "") {
    inputNamaClass("is-invalid", "is-valid");
    feedBack.textContent = Language.feedbackForName("zero");
  } else {
    inputNamaClass("is-valid", "is-invalid");
  }
});

// set name
document.forms["nameForm"].onsubmit = function (event) {
  event.preventDefault();
  if (inputNama.value.length > 8) {
  } else if (inputNama.value === "") {
  } else {
    const name = document.forms["nameForm"]["nameInput"].value;
    localStorage.setItem("name", name);
    window.location.replace("/index.html");
  }
};
