(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        setNotes(notes) {
          this.notes = notes;
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // NotesView.js
  var require_NotesView = __commonJS({
    "NotesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.maincontainerEl = document.querySelector("#main-container");
          document.querySelector("#add-note-button").addEventListener("click", () => {
            const newNote = document.querySelector("#note-input").value;
            this.addNewNote(newNote);
            document.querySelector("#note-input").value = "";
          });
        }
        displayNotes() {
          document.querySelectorAll(".note").forEach((element) => {
            element.remove();
          });
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.maincontainerEl.append(noteEl);
          });
        }
        addNewNote(note) {
          this.model.addNote(note);
          this.displayNotes();
        }
      };
      module.exports = NotesView2;
    }
  });

  // NotesApi.js
  var require_NotesApi = __commonJS({
    "NotesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = NotesApi2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_NotesView();
  var NotesApi = require_NotesApi();
  var api = new NotesApi();
  var model = new NotesModel();
  var view = new NotesView(model, api);
  api.loadNotes((notes) => {
    model.setNotes(notes);
    view.displayNotes();
  });
  console.log(model.getNotes());
})();
