import React, { useContext, useEffect, useRef, useState, useCallback } from 'react';
import noteContext from '../context/notes/noteContext';
import Noteitem from "./Noteitem";
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
import Spiner from './Spiner';

const Notes = () => {
    const navigate = useNavigate();
    const { notes, getNote, editNote, loading } = useContext(noteContext);

    // Create stable references for functions
    const getNoteRef = useRef(getNote);
    const editNoteRef = useRef(editNote);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        } else {
            getNoteRef.current();
        }
    }, [navigate]);

    const ref = useRef();
    const refClose = useRef();
    const [upNote, setUpdateNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

    const handelEdit = useCallback((currnote) => {
        ref.current.click();
        setUpdateNote({ id: currnote._id, etitle: currnote.title, edescription: currnote.description, etag: currnote.tag });
    }, []);

    const onChange = (e) => {
        setUpdateNote({ ...upNote, [e.target.name]: e.target.value });
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        editNoteRef.current(upNote.id, upNote.etitle, upNote.edescription, upNote.etag);
        refClose.current.click();
    };

    return (
        loading ? <Spiner /> :
            <>
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" name="etitle" onChange={onChange} value={upNote.etitle} className="form-control" id="title" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input type="text" name="edescription" onChange={onChange} value={upNote.edescription} className="form-control" id="description" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag Name</label>
                                        <input type="text" name="etag" onChange={onChange} value={upNote.etag} className="form-control" id="tag" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={handelSubmit} type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mynotes row">
                    <h2 className='my-4'>Your Notes</h2>
                    {
                        notes.map((note) => {
                            return <Noteitem key={note._id} note={note} handelEdit={handelEdit} />;
                        })
                    }
                    <AddNote />
                </div>
            </>
    );
}

export default Notes;
