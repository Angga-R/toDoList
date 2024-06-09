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
      for (let i = 0; i < 5; i++) {
        const data = this.#data[i];
        this.#show(data, `data${i + 1}`);
      }
    }
  }

  saveToLocal(content) {
    let success = false;
    if (this.#data1 === null) {
      localStorage.setItem("data1", content);
      success = true;
    } else if (this.#data2 === null) {
      localStorage.setItem("data2", content);
      success = true;
    } else if (this.#data3 === null) {
      localStorage.setItem("data3", content);
      success = true;
    } else if (this.#data4 === null) {
      localStorage.setItem("data4", content);
      success = true;
    } else if (this.#data5 === null) {
      localStorage.setItem("data5", content);
      success = true;
    } else {
      this.feedBack("Maksimal hanya 5 data!");
    }

    if (success) {
      this.feedBack("Berhasil Menambah data!");
      window.location.reload();
    }
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

  #show(todo, dataName) {
    if (todo !== null) {
      // <tr>
      const tr = document.createElement("tr");

      // Numbers
      const thNumber = document.createElement("th");
      thNumber.textContent = "→";
      thNumber.style = "width: 5%";

      // To-do Content
      const tdValue = document.createElement("td");
      tdValue.className = "content";
      tdValue.style = "width : 75%";
      if (todo.length >= 25) {
        todo = todo.slice(0, 25) + "\n" + todo.slice(25);
      }
      tdValue.textContent = todo;

      // To-do Content
      const tddataName = document.createElement("td");
      tddataName.className = "hidden dataName";
      tddataName.textContent = dataName;

      // Button Done & Delete
      const tdButton = document.createElement("td");
      tdButton.style = "width: 20%";
      // btn done
      const btnDone = document.createElement("input");
      btnDone.type = "button";
      btnDone.className = "btn btn-outline-success mx-1 my-1";
      btnDone.value = "Done";
      tdButton.appendChild(btnDone);
      // btn delete
      const btnDelete = document.createElement("input");
      btnDelete.type = "button";
      btnDelete.name = "btnDelete";
      btnDelete.className = "btn btn-outline-danger";
      btnDelete.value = "Delete";
      tdButton.appendChild(btnDelete);

      // set <tr> child
      tr.appendChild(thNumber);
      tr.appendChild(tdValue);
      tr.appendChild(tddataName);
      tr.appendChild(tdButton);

      // set <tr> appendChild of <tBody>
      const tbTodo = document.getElementById("tbTodo");
      tbTodo.appendChild(tr);
    }
  }

  deleteData(data) {
    if (confirm("Yakin untuk menghapus data ini?")) {
      localStorage.removeItem(data);
      window.location.reload();
    }
  }

  feedBack(message) {
    alert(message);
  }
}
