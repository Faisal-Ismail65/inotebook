import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext';
const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: " ", description: " ", tag: " " });
    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description,note.tag);
        setNote({ title: " ", description: " ", tag: " " });
    }
    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    
    return (
        <div><h1 className='text-center my-3'>Add a Note</h1>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input value={note.title} name='title' onChange={handleChange} minLength={5} required type="text" className="form-control" id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea value={note.description} name='description' onChange={handleChange} minLength={5} required className="form-control" id="description" rows="2"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input value={note.tag} name='tag' onChange={handleChange} type="text" minLength={5} required className="form-control" id="tag" />
            </div>
            <button disabled={note.title.length < 5 || note.description.length < 5} type='submit' className='btn btn-primary' onClick={handleSubmit} >Add Note</button>
        </div>
    )
}

export default AddNote