let language;

document.querySelector(".indonesia").onclick = () => {
  language = "indonesia";
  localStorage.setItem("language", language);
  window.location.replace("/set-name.html");
};
document.querySelector(".english").onclick = () => {
  language = "english";
  localStorage.setItem("language", language);
  window.location.replace("/set-name.html");
};
document.querySelector(".jpn").onclick = () => {
  language = "jpn";
  localStorage.setItem("language", language);
  window.location.replace("/set-name.html");
};
