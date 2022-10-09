import NoteContext from "./NoteContext";
import { useState } from 'react';
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MWQzODhiOGE0OWQ5ODE2MzFjMTk2In0sImlhdCI6MTY2NTI1OTg0Mn0.XNIQqRtBrWXOfeLZdG8DDaGrZ74VvAzyJT4jeE2J0yk'
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  }



  // add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MWQzODhiOGE0OWQ5ODE2MzFjMTk2In0sImlhdCI6MTY2NTI1OTg0Mn0.XNIQqRtBrWXOfeLZdG8DDaGrZ74VvAzyJT4jeE2J0yk'
      },
      body: JSON.stringify({title,description,tag})
    });
    response.json();
    
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
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MWQzODhiOGE0OWQ5ODE2MzFjMTk2In0sImlhdCI6MTY2NTI1OTg0Mn0.XNIQqRtBrWXOfeLZdG8DDaGrZ74VvAzyJT4jeE2J0yk'
      }
    });
    response.json();

    let newNote = notes.filter(note => note._id !== id);
    setNotes(newNote);
  }

  // edit note

  const editNote = async (id, title, description, tag) => {
    
    const response = await fetch(`${host}api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MWQzODhiOGE0OWQ5ODE2MzFjMTk2In0sImlhdCI6MTY2NTI1OTg0Mn0.XNIQqRtBrWXOfeLZdG8DDaGrZ74VvAzyJT4jeE2J0yk'
      },
      body: JSON.stringify({title,description,tag})
    });
    response.json();
    
    
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === "id") {
        element.title = "title";
        element.description = "description";
        element.tag = "tag";
      }
    }
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote , getNotes }} >
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;