const NotesApi = require('./notesApi')
require('jest-fetch-mock').enableMocks()

describe('testing api class', () => {
  // beforeEach(() => {
  //   fetch.resetMocks()
  // }) need this code if you are mocking fetch more than once
  it('uses fetch to call notes backend server and loads notes from server', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({data: 'This note is coming from the server'})); //when fetch is called, return this as the response
    
    //assert on the response:  
    api.loadNotes((notesInfo) => {
      expect(notesInfo.data).toBe('This note is coming from the server');
    });
// the tests below are more robust because if the loadNotes method, in the notesapi.js file, had no code inside it, line 12 expect would not run and therefore the test would pass even though method is empty and not calling fetch.
    expect(fetch.mock.calls.length).toEqual(1) //checking that fetch has been called once
    expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000/notes') //checking that fetch has been called with this url
  });

  // it('posts a note to the backend when a note is created', async () => {
  //   const api = new NotesApi();
  //   fetch.mockResponseOnce(JSON.stringify(
  //       'created test note'))

  //   api.createNote('creating test note') 
  //   api.loadNotes((notesInfo) => {
  //     expect(notesInfo).toBe('created test note');
  //   });
    
  //   expect(fetch.mock.calls.length).toEqual(1)
  // })

});


//run this fetch once independently

// const api = new NotesApi();
// // fetch.mockResponseOnce(JSON.stringify( //run this fetch once independently
// //   'This note is coming from the server'
// // ));
// allow(api).to receive(fetch).with(2).arg
// expect(api).to receive(fetch)

// api.loadNotes
// expect(api.loadnotes).to eq ('something')
// // api.loadNotes((notesInfo) => {
// //   expect(notesInfo).toBe('This note is coming from the server');
// // });
// });

