import React, {useState, useContext, useEffect, useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote'
const Notes = (props) => {
    let navigate = useNavigate();
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }else{
            navigate("/login");
        }

        // eslint-disable-next-line
    }, [])
    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({ id : "" ,etitle: "", edescription: "", etag: "" });
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id ,etitle: currentNote.title , edescription : currentNote.description, etag: currentNote.tag});
        
    }
    const handleClick = () => {
        editNote(note.id, note.etitle, note.edescription , note.etag);
        refClose.current.click();
        props.showAlert("success","Note Updated Successfully...");
    }
    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    return (
        <>
            <AddNote showAlert={props.showAlert} />
            <button type="button" ref={ref} className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="etitle" className="form-label">Title</label>
                                <input value={note.etitle} name='etitle' onChange={handleChange} type="text" minLength={5} required className="form-control" id="etitle" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="edescription" className="form-label">Description</label>
                                <textarea value={note.edescription} name='edescription' onChange={handleChange} minLength={5} required className="form-control" id="edescription" rows="2"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="etag" className="form-label">Tag</label>
                                <input value={note.etag} name='etag' onChange={handleChange} type="text" minLength={5} required className="form-control" id="etag" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h2 className='text-center'>Your Notes</h2>
                <div className='container text-center'>
                {notes.length === 0 && "No Notes To Display"}
                </div>
                {notes.map((note) => <Noteitem showAlert={props.showAlert} key={note._id} note={note} updateNote={updateNote} />)}
            </div>
        </>
    )
}

export default Notes