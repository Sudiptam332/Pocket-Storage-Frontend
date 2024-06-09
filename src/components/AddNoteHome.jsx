import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import { IoAddCircleOutline } from "react-icons/io5";

const AddNoteHome = () => {

    const context = useContext(noteContext);
    const { addNote } = context;
    const ref = useRef();
    const refClose = useRef();

    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        refClose.current.click();
    }

    const handelAdd = () => {
        ref.current.click();
        // setUpdateNote({ id: currnote._id, etitle: currnote.title, edescription: currnote.description, etag: currnote.tag })
    }

    return (
        <>
            <div className="wellcomeAddNote">
                <h3 className='my-3'>WellCome to your Notebook Application</h3>
                <h4>Add a Note</h4>
                <IoAddCircleOutline className='addIcon' onClick={handelAdd} />
                <p>You don't have any note to show, please add a note.</p>
            </div>
            <button ref={ref} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label" >Title</label>
                                    <input type="text" name="title" onChange={onChange} className="form-control" id="title" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                                    <input type="text" name="description" onChange={onChange} className="form-control" id="description" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Tag Name</label>
                                    <input type="text" name="tag" onChange={onChange} className="form-control" id="tag" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button ref={refClose} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handelSubmit} type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNoteHome