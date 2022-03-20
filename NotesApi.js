class NotesApi {

  loadNotes(callback) {
    fetch('http://localhost:3000/notes') 
    .then(response => response.json()) 
    .then(data => {
      callback(data) 
    });
  }
  //alternative to the above: 
// async loadNotes() {
//   let response = await fetch('http://localhost:3000/notes');
//   let data = await response.json();
//   return data;
//   }
  createNote(notetext) {
    //const note = { note: notetext }
    console.log('in the createNote method', notetext)
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 'content': notetext })
    })
    .then(response => {
      response.json();
    })
    .then(data => {
      
      console.log('Success. here is the data within createNote', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}

module.exports = NotesApi;

//data is an array with a string as element. When we call api.loadNotes, we pass it a specific function which takes the data(notes) as a parameter. This specific function becomes the callback function here