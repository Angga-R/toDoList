export class Language {
  static lan = localStorage.getItem("language");
  // Navbar
  #btnLanguage = this.#byId("btn-language");
  #btnIndonesia = this.#byId("ind");
  #btnEnglish = this.#byId("english");
  #btnJpn = this.#byId("jpn");
  // Create Todo
  #createinput = this.#byId("create-input");
  #btnAdd = this.#byId("button-add");
  #feedBack = this.#byId("feedback");
  // Search Todo
  #searchInput = this.#byId("searchInput");
  // To-do Table
  #TodoTitle = this.#byId("title-todo");
  #deleteAllTodo = this.#byId("delete-all-todo");
  // History Table
  #historyTitle = this.#byId("title-history");
  #deleteAllHistory = this.#byId("delete-all-history");

  constructor() {
    this.#setLanguage();
    if (Language.lan == "indonesia") {
      this.#indonesiaIndex();
    } else if (Language.lan == "english") {
      this.#englishIndex();
    } else if (Language.lan == "jpn") {
      this.#jpnIndex();
    }
  }

  #byId(id) {
    return document.getElementById(id);
  }

  #setLanguage() {
    this.#btnIndonesia.onclick = () => {
      localStorage.setItem("language", "indonesia");
      window.location.reload();
    };
    this.#btnEnglish.onclick = () => {
      localStorage.setItem("language", "english");
      window.location.reload();
    };
    this.#btnJpn.onclick = () => {
      localStorage.setItem("language", "jpn");
      window.location.reload();
    };
  }

  #jpnIndex() {
    // navbar
    this.#btnLanguage.textContent = "言語";
    this.#btnJpn.classList.add("active");
    // Create Todo
    this.#createinput.placeholder = "やることを書きましょう～";
    this.#btnAdd.textContent = "入力";
    this.#feedBack.textContent = "50キャラー以上は入力出来ない !";
    // Search Todo
    this.#searchInput.placeholder = "こちらで探す～";
    // To-do Table
    this.#TodoTitle.textContent = "あなたのやること";
    this.#deleteAllTodo.textContent = "全削除";
    // History Table
    this.#historyTitle.textContent = "やることの歴史";
    this.#deleteAllHistory.textContent = "全削除";
  }

  #englishIndex() {
    // navbar
    this.#btnLanguage.textContent = "Language";
    this.#btnEnglish.classList.add("active");
    // Create Todo
    this.#createinput.placeholder = "Add New To-Do";
    this.#btnAdd.textContent = "Add";
    this.#feedBack.textContent = "50 character only you can add";
    // Search Todo
    this.#searchInput.placeholder = "Search...";
    // To-do Table
    this.#TodoTitle.textContent = "Your's To-Do";
    this.#deleteAllTodo.textContent = "delete all";
    // History Table
    this.#historyTitle.textContent = "History";
    this.#deleteAllHistory.textContent = "delete all";
  }

  #indonesiaIndex() {
    // navbar
    this.#btnLanguage.textContent = "Bahasa";
    this.#btnIndonesia.classList.add("active");
    // Create Todo
    this.#createinput.placeholder = "Tulis yang akan kamu lakukan disini...";
    this.#btnAdd.textContent = "Tambah";
    this.#feedBack.textContent = "Maksimal hanya 50 karakter";
    // Search Todo
    this.#searchInput.placeholder = "Pencarian...";
    // To-do Table
    this.#TodoTitle.textContent = "To-Do";
    this.#deleteAllTodo.textContent = "hapus semua";
    // History Table
    this.#historyTitle.textContent = "Riwayat";
    this.#deleteAllHistory.textContent = "hapus semua";
  }

  static deleteButton() {
    if (Language.lan == "indonesia") {
      return "Hapus";
    } else if (Language.lan == "english") {
      return "Delete";
    } else if (Language.lan == "jpn") {
      return "削除";
    }
  }

  static doneButton() {
    if (Language.lan == "indonesia") {
      return "Selesai";
    } else if (Language.lan == "english") {
      return "Done";
    } else if (Language.lan == "jpn") {
      return "終了";
    }
  }

  static deleteAllDataConfirm(table) {
    if (table == "todo") {
      if (Language.lan == "indonesia") {
        return "Kamu yakin untuk menghapus semua data?";
      } else if (Language.lan == "english") {
        return "Are you sure to delete all data?";
      } else if (Language.lan == "jpn") {
        return "全削除を本気ですか？";
      }
    } else if (table == "history") {
      if (Language.lan == "indonesia") {
        return "Kamu yakin untuk menghapus semua riwayat?";
      } else if (Language.lan == "english") {
        return "Are you sure to delete all history?";
      } else if (Language.lan == "jpn") {
        return "歴史の全削除を本気ですか？";
      }
    }
  }

  static deleteDataConfirm() {
    if (Language.lan == "indonesia") {
      return "Kamu yakin untuk menghapus data ini?";
    } else if (Language.lan == "english") {
      return "Are you sure to delete this data?";
    } else if (Language.lan == "jpn") {
      return "このデータを削除する？";
    }
  }

  static maxDataFeedback() {
    if (Language.lan == "indonesia") {
      alert("Maksimal hanya 5 data!");
    } else if (Language.lan == "english") {
      alert("Only 5 data you can add!");
    } else if (Language.lan == "jpn") {
      alert("データは5件しか追加出来ない！");
    }
  }

  static addDataSuccessFeedback() {
    if (Language.lan == "indonesia") {
      alert("Berhasil menambah data");
    } else if (Language.lan == "english") {
      alert("Add data success");
    } else if (Language.lan == "jpn") {
      alert("データを追加出来ました");
    }
  }

  static addNullDataFeedback() {
    if (Language.lan == "indonesia") {
      alert("Tidak bisa menambahkan data kosong!");
    } else if (Language.lan == "english") {
      alert("You can't add empty data!");
    } else if (Language.lan == "jpn") {
      alert("空のデータは追加出来ません");
    }
  }

  static forSetName() {
    switch (Language.lan) {
      case "indonesia":
        return "Nama :";
      case "english":
        return "Your Name :";
      case "jpn":
        return "名前 :";
    }
  }

  static feedbackForName(condition) {
    if (condition == "zero") {
      switch (Language.lan) {
        case "indonesia":
          return "Nama tidak boleh kosong!";
        case "english":
          return "Please input your name!";
        case "jpn":
          return "名前を入力してください";
      }
    } else {
      switch (Language.lan) {
        case "indonesia":
          return "Maksimal 8 karakter!";
        case "english":
          return "Max 8 character!";
        case "jpn":
          return "名前が長すぎ「max.8」";
      }
    }
  }
}
