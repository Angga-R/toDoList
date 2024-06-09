export class History {
  #dataHistory1 = localStorage.getItem("history1");
  #dataHistory2 = localStorage.getItem("history2");
  #dataHistory3 = localStorage.getItem("history3");
  #dataHistory4 = localStorage.getItem("history4");
  #dataHistory5 = localStorage.getItem("history5");
  #dataHistory = [
    this.#dataHistory1,
    this.#dataHistory2,
    this.#dataHistory3,
    this.#dataHistory4,
    this.#dataHistory5,
  ];

  constructor() {
    if (
      this.#dataHistory1 === null &&
      this.#dataHistory2 === null &&
      this.#dataHistory3 === null &&
      this.#dataHistory4 === null &&
      this.#dataHistory5 === null
    ) {
      document.getElementById("delete-all-history").className = "hidden";
      this.#nullData();
    } else {
      this.#clearDuplicate();
      for (let i = 0; i < 5; i++) {
        const dataHistory = this.#dataHistory[i];

        if (dataHistory !== null) {
          this.#show(dataHistory, i + 1);
        }
      }
    }
  }

  #clearDuplicate() {
    const tbHistory = document.getElementById("tbHistory"); // mengambil <tbody id='todolistBody'>
    while (tbHistory.firstChild) {
      // ketika masih ada turunan pertama dari si <tbody> (<tr>)
      tbHistory.removeChild(tbHistory.firstChild); // hapus turunan yaitu (turunan pertama dari si <tbody> (<tr>))
    }
  }

  #nullData() {
    const tbHistory = document.getElementById("tbHistory");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const img = document.createElement("img");

    img.src = "img/empty_data/Indonesia.png";
    img.className = "rounded mx-auto img-fluid";

    tbHistory.appendChild(tr);
    tr.appendChild(td);
    td.appendChild(img);
  }

  #show(content, index) {
    // <tr>
    const tr = document.createElement("tr");

    // Numbers
    const thNumber = document.createElement("th");
    thNumber.textContent = index;
    thNumber.style = "width: 5%";

    // To-do Content
    const tdValue = document.createElement("td");
    tdValue.style = "width : 75%";
    if (content.length >= 25) {
      content = content.slice(0, 25) + "\n" + content.slice(25);
    }
    tdValue.textContent = content;

    // set <tr> child
    tr.appendChild(thNumber);
    tr.appendChild(tdValue);

    // set <tr> appendChild of <tBody>
    const tbHistory = document.getElementById("tbHistory");
    tbHistory.appendChild(tr);
  }

  deleteAllHistory() {
    if (confirm("Yakin akan menghapus semua history?")) {
      localStorage.removeItem("history1");
      localStorage.removeItem("history2");
      localStorage.removeItem("history3");
      localStorage.removeItem("history4");
      localStorage.removeItem("history5");
      window.location.reload();
    }
  }
}
