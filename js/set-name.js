const language = localStorage.getItem("language");
const label = document.querySelector("label");
const inputNama = document.querySelector("input");
const feedBack = document.getElementById("feedback");

switch (language) {
  case "indonesia":
    label.textContent = "Nama :";
    break;
  case "english":
    label.textContent = "Your Name :";
    break;
  case "jpn":
    label.textContent = "名前 :";
    break;
}

inputNama.addEventListener("keyup", () => {
  if (inputNama.value.length > 10) {
    inputNama.classList.add("is-invalid");
    inputNama.classList.remove("is-valid");
    feedBack.className = "invalid-feedback";
    feedBack.textContent = "Nama terlalu panjang!";
  } else if (inputNama.value === "") {
    inputNama.classList.add("is-invalid");
    inputNama.classList.remove("is-valid");
    feedBack.className = "invalid-feedback";
    feedBack.textContent = "Nama tidak boleh kosong!";
  } else {
    inputNama.classList.add("is-valid");
    inputNama.classList.remove("is-invalid");
  }
});

document.forms["nameForm"].onsubmit = function (event) {
  event.preventDefault();
  const name = document.forms["nameForm"]["nameInput"].value;
  localStorage.setItem("name", name);
  window.location.replace("/index.html");
};
