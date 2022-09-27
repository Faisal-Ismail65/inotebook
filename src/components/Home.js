import React, {useContext} from 'react'
import noteContext from '../context/notes/NoteContext'; 
const Home = () => {
const context = useContext(noteContext);
const {notes, setNotes} =  context;
  return (
  <>
    <h1 className='text-center my-3'>Add a Note</h1>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" className="form-control" id="title" />
    </div>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" className="form-control" id="title" />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <textarea className="form-control" id="description" rows="2"></textarea>
    </div>
    <div className='container my-3'>
      <h2>Your Notes</h2>
      {notes.map((note)=>note.title)}

    </div>

  </>
  )
}
export default Home