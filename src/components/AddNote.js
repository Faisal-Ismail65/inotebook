import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext';
const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description,note.tag);
    }
    return (
        <div><h1 className='text-center my-3'>Add a Note</h1>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input name='title' onChange={handleChange} type="text" className="form-control" id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea name='description' onChange={handleChange} className="form-control" id="description" rows="2"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input name='tag' onChange={handleChange} type="text" className="form-control" id="tag" />
            </div>
            <button type='submit' className='btn btn-primary' onClick={handleClick} >Add Note</button>
        </div>
    )
}

export default AddNote