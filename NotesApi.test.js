const NotesApi = require('./NotesApi')
require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('calls fetch and loads notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify(
      'This note is coming from the server'
    ));

    api.loadNotes((notesInfo) => {
      expect(notesInfo).toBe('This note is coming from the server');
    });
  });
});