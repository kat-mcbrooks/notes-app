/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel');


beforeEach(() => {
  model = new NotesModel();
});

describe('NotesView', () => {
  it('should have 2 div.notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    model.addNote('Notes test 1');
    model.addNote('Notes test 2');

    const view = new NotesView(model);
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('Notes test 1');
  });

  it('should add a new note through user input', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new NotesView(model);

    const inputEl = document.querySelector("#input");
    inputEl.value = "This is a first supremely fabulous note";
    const buttonEl = document.querySelector("#add-note-button");
    buttonEl.click();

    // const inputEl2 = document.querySelector("#input");
    // inputEl2.value = "This is a second supremely fabulous note";
    // const buttonEl2 = document.querySelector("#add-note-button");
    // buttonEl2.click();

    // expect(document.querySelectorAll('div.note')[0].innerText).toBe("This is a first supremely fabulous note");
    // expect(document.querySelectorAll('div.note')[0].innerText).toBe("This is a second supremely fabulous note");
    expect(document.querySelectorAll('.note').length).toEqual(2);
  });



})