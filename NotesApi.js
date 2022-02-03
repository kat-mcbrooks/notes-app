class NotesApi {

  loadNotes(callback) {
    fetch('http://localhost:3000/notes') 
    .then(response => response.json()) 
    .then(data => {
      callback(data) //data is an array with a string as element. When we call api.loadNotes, we pass it a specific function which takes the data(notes) as a parameter. This specific function becomes the callback function here
    });
  }
}

module.exports = NotesApi;