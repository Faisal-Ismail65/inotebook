import NoteContext from "./NoteContext";
import {useState} from 'react';
const NoteState = (props) => {
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
            }
          ]
    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes,setNotes}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;