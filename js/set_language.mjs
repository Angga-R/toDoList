if (localStorage.getItem("language") == "indonesia") {
  if (localStorage.getItem("language") == "english") {
    if (localStorage.getItem("language") == "jpn") {
      window.location.replace("/index.html");
    }
  }
}

document.querySelector(".indonesia").onclick = () => {
  localStorage.setItem("language", "indonesia");
  window.location.replace("/set-name.html");
};
document.querySelector(".english").onclick = () => {
  localStorage.setItem("language", "english");
  window.location.replace("/set-name.html");
};
document.querySelector(".jpn").onclick = () => {
  localStorage.setItem("language", "jpn");
  window.location.replace("/set-name.html");
};
