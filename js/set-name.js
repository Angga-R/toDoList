const language = localStorage.getItem("language");
const label = document.querySelector("label");

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
