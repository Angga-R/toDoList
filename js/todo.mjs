export class Todo {
  #data1 = localStorage.getItem("data1");
  #data2 = localStorage.getItem("data2");
  #data3 = localStorage.getItem("data3");
  #data4 = localStorage.getItem("data4");
  #data5 = localStorage.getItem("data5");
  #data = [this.#data1, this.#data2, this.#data3, this.#data4, this.#data5];

  constructor() {
    if (
      this.#data1 === null &&
      this.#data2 === null &&
      this.#data3 === null &&
      this.#data4 === null &&
      this.#data5 === null
    ) {
      this.#nullData();
    } else {
      this.#clearTodolist();
      for (let i = 0; i < this.#data.length; i++) {
        const data = this.#data[i];
        this.#show(data, i + 1);
      }
    }
  }

  saveToLocal(content) {
    if (this.#data1 === null) {
      localStorage.setItem("data1", content);
    } else if (this.#data2 === null) {
      localStorage.setItem("data2", content);
    } else if (this.#data3 === null) {
      localStorage.setItem("data3", content);
    } else if (this.#data4 === null) {
      localStorage.setItem("data4", content);
    } else if (this.#data5 === null) {
      localStorage.setItem("data5", content);
    } else {
      this.hiddenContent("text-success", "text-danger", "Data Maksimal 5");
    }
    window.location.reload();
  }

  #clearTodolist() {
    const tbTodo = document.getElementById("tbTodo"); // mengambil <tbody id='todolistBody'>
    while (tbTodo.firstChild) {
      // ketika masih ada turunan pertama dari si <tbody> (<tr>)
      tbTodo.removeChild(tbTodo.firstChild); // hapus turunan yaitu (turunan pertama dari si <tbody> (<tr>))
    }
  }

  #nullData() {
    const tbTodo = document.getElementById("tbTodo");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const img = document.createElement("img");

    img.src = "img/empty_data/Indonesia.png";
    img.className = "rounded mx-auto img-fluid";

    tbTodo.appendChild(tr);
    tr.appendChild(td);
    td.appendChild(img);
  }

  #show(todo, index) {
    // <tr>
    const tr = document.createElement("tr");

    // Numbers
    const thNumber = document.createElement("th");
    thNumber.textContent = index;

    // To-do Content
    const tdValue = document.createElement("td");
    tdValue.textContent = todo;

    // Button Done & Delete
    const tdButton = document.createElement("td");
    // btn done
    const btnDone = document.createElement("input");
    btnDone.type = "button";
    btnDone.className = "btn btn-outline-success mx-1 my-1";
    btnDone.value = "Done";
    tdButton.appendChild(btnDone);
    // btn delete
    const btnDelete = document.createElement("input");
    btnDelete.type = "button";
    btnDelete.className = "btn btn-outline-danger";
    btnDelete.value = "Delete";
    tdButton.appendChild(btnDelete);

    // set <tr> child
    tr.appendChild(thNumber);
    tr.appendChild(tdValue);
    tr.appendChild(tdButton);

    // set <tr> appendChild of <tBody>
    const tbTodo = document.getElementById("tbTodo");
    tbTodo.appendChild(tr);
  }

  hiddenContent(removingClass, addingClass, textContent) {
    const feedBack = document.getElementById("feedback");
    feedBack.classList.contains("hidden")
      ? feedBack.classList.remove("hidden")
      : feedBack.classList.remove(removingClass);
    feedBack.classList.add(addingClass);
    feedBack.textContent = textContent;
  }
}
