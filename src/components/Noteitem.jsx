import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import noteContext from '../context/notes/noteContext';

const Noteitem = ({ note, handelEdit }) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;

    return (
        <div className="card col-md-3 mx-3 my-3 mynote">
            <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                    <h5 className="card-title">{note.title}</h5>
                    <div className="noteControl">
                        <MdDelete onClick={() => deleteNote(note._id)} />
                        <FaEdit onClick={() => handelEdit(note)} />
                    </div>
                </div>
                <p className="card-text">{note.description}</p>
            </div>
        </div>
    )
}

export default Noteitem