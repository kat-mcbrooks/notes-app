class NotesView {
  constructor(model, api) {
    this.model = model
    this.api = api
    this.maincontainerEl = document.querySelector('#main-container');
    
    document.querySelector('#add-note-button').addEventListener('click', () => {
      const newNote = document.querySelector('#input').value;
      this.addNewNote(newNote);
      document.querySelector('#input').value = "";
    });
 
  }

  displayNotes() {
    //first, clear the existing notes: 
    document.querySelectorAll('div.note').forEach(element => {
      element.remove();
    });

    const notes = this.model.getNotes();

    notes.forEach(note => {
      let noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.maincontainerEl.append(noteEl);
    })
    
  }

  addNewNote(note) {
    console.log(note)
    //console.log(this.api.createNote(note));
    this.model.addNote(note);
    this.api.createNote(note);
    this.displayNotes();
  }
}

module.exports = NotesView