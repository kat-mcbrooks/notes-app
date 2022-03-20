const NotesModel = require('./notesModel')

let model;
beforeEach(() => {
  model = new NotesModel();
});

describe(NotesModel, () => {
  it('begins with an empty notes array', () => {
    expect(model.getNotes()).toEqual([]);
  });
  it('adds a note', () => {
    model.addNote('Buy oat milk');
    expect(model.getNotes()).toEqual(['Buy oat milk']);
  });
  it('adds a note', () => {
    model.addNote('Buy oat milk');
    model.addNote('Learn about callbacks');
    expect(model.getNotes()).toEqual(['Buy oat milk', 'Learn about callbacks']);
  });
  it('clears the notes array', () => {
    model.addNote('Buy oat milk');
    model.reset()
    expect(model.getNotes()).toEqual([])
  });
})

