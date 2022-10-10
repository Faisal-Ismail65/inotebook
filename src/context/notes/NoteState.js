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
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MWQzODhiOGE0OWQ5ODE2MzFjMTk2In0sImlhdCI6MTY2NTM4Mjk3NX0.ev_SCgPCEyGS_Idi_F36pF2AcBTGYvuUBE9t8uujaNw'
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  }



  // add a note
   // Add note
   const addNote = async (title,description,tag) => {
    //api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MWQzODhiOGE0OWQ5ODE2MzFjMTk2In0sImlhdCI6MTY2NTM4Mjk3NX0.ev_SCgPCEyGS_Idi_F36pF2AcBTGYvuUBE9t8uujaNw'
      }, 
      body: JSON.stringify({title,description,tag}) 
    });
    const note = await response.json()
    setNotes(notes.concat(note))
};
    
  // delete note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MWQzODhiOGE0OWQ5ODE2MzFjMTk2In0sImlhdCI6MTY2NTM4Mjk3NX0.ev_SCgPCEyGS_Idi_F36pF2AcBTGYvuUBE9t8uujaNw'
      }
    });
    const json = await response.json();
    console.log(json);
    let newNotes = notes.filter(note => note._id !== id);
    setNotes(newNotes);

  }

  // edit note

  const editNote = async (id, title, description, tag) => {
    // Api Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MWQzODhiOGE0OWQ5ODE2MzFjMTk2In0sImlhdCI6MTY2NTM4Mjk3NX0.ev_SCgPCEyGS_Idi_F36pF2AcBTGYvuUBE9t8uujaNw'
      },
      body: JSON.stringify({title,description,tag})
    });
    const json = await response.json();
    console.log(json);
    
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote , getNotes }} >
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;