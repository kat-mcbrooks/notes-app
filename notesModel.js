class NotesModel {

  constructor() {
    this.notes = [];
  }
  getNotes() { 
    return this.notes;
  }
  addNote(note) {
    this.notes.push(note);
  }
  setNotes(notes) { // this should be passed the notes coming from the server
    this.notes = notes;
  }

  reset() {
    this.notes = [];
  }
}

module.exports = NotesModel;