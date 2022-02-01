const NotesModel = require('./notesModel')

describe(NotesModel, () => {
  it('returns an empty array', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });  
})

