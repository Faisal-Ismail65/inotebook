import NoteContext from "./NoteContext";
import { useState } from 'react';
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [
    {
      "_id": "632c46dd481860eb059196db",
      "user": "632b6e84342171c7f1b33f40",
      "title": "note title",
      "description": "this is the first note",
      "tag": "this tag for the first time",
      "date": "2022-09-22T11:28:29.798Z",
      "__v": 0
    },
    {
      "_id": "632c46de481860eb059196dd",
      "user": "632b6e84342171c7f1b33f40",
      "title": "note title",
      "description": "this is the first note",
      "tag": "this tag for the first time",
      "date": "2022-09-22T11:28:30.261Z",
      "__v": 0
    },
    {
      "_id": "632c46dd481860eb059196b",
      "user": "632b6e84342171c7f1b33f40",
      "title": "note title",
      "description": "this is the first note",
      "tag": "this tag for the first time",
      "date": "2022-09-22T11:28:29.798Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial);

  // add a note
  const addNote = (title, description, tag) => {
    let note = {
      "_id": "632c46de481860eb05919dd",
      "user": "632b6e84342171c7f1b33f40",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-09-22T11:28:30.261Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }

  // delete note
  const deleteNote = (id) => {
    let newNote = notes.filter(note => note._id !== id);
    setNotes(newNote);
  }

  // edit note

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MWQzODhiOGE0OWQ5ODE2MzFjMTk2In0sImlhdCI6MTY2NTI1OTg0Mn0.XNIQqRtBrWXOfeLZdG8DDaGrZ74VvAzyJT4jeE2J0yk'
      },
      body: JSON.stringify("data")
    });
    const json = response.json();
  }
  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if (element._id === "id") {
      element.title = "title";
      element.description = "description";
      element.tag = "tag";
    }}
    
return (
  <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }} >
    {props.children}
  </NoteContext.Provider>
)
}
export default NoteState;