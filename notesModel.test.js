const NotesModel = require('./notesModel')

describe(NotesModel, () => {
  const model = new NotesModel();
  it('returns an empty array', () => {
    expect(model.getNotes()).toEqual([]);
  });
  it('adds a note', () => {
    model.addNote('Buy oat milk');
    expect(model.getNotes()).toEqual(['Buy oat milk']);
  });  
})

