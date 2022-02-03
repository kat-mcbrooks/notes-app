// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

const NotesModel = require('./notesModel')
const NotesView = require('./notesView')
const NotesApi = require('./notesApi')

const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model, api);

api.loadNotes((notes) => { //notes is an array that has been retrieved from server via the loadNotes and fetch method
  model.setNotes(notes);
  view.displayNotes();
});

//view.displayNotes();
console.log(model.getNotes());
