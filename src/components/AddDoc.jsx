import React, { useState, useContext, useEffect, useRef, useCallback } from 'react';
import docContext from '../context/docs/docContext';
import { MdDelete } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Spiner from './Spiner';

const AddDoc = () => {
    const navigate = useNavigate();
    const { docs, addDoc, fetchDocs, deleteDoc, loading } = useContext(docContext);
    const [doc, setDoc] = useState(null);
    const [filename, setFilename] = useState('');
    const ref = useRef();
    const refClose = useRef();

    const fetchDocsRef = useRef(fetchDocs);
    const addDocRef = useRef(addDoc);
    const deleteDocRef = useRef(deleteDoc);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        } else {
            fetchDocsRef.current();
        }
    }, [navigate]);

    const onFileChange = (e) => {
        setDoc(e.target.files[0]);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('doc', doc);
        formData.append('filename', filename);
        addDocRef.current(formData);
        refClose.current.click();
    };

    const handleDelete = (docId) => {
        deleteDoc(docId);
    };

    const handleAddDoc = () => {
        setDoc(null);
        setFilename('');
        ref.current.click();
    };

    return (
        loading ? <Spiner /> :
            <>
                <div className='docCon mynotes row'>
                    <h2 className='my-4'>Your Documents</h2>
                    {docs.map(doc => (
                        <div className='doc mx-3 my-3' key={doc._id}>
                            <h4>{doc.filename}</h4>
                            <div>
                                <a href={doc.url} target="_blank" rel="noopener noreferrer">
                                    <button className='btn btn-primary my-2 mx-3'><FaEye /></button>
                                </a>
                                <button className='btn btn-danger my-2' onClick={() => handleDelete(doc._id)}><MdDelete /></button>
                            </div>
                        </div>
                    ))}

                    <div className="adddoc mx-3 my-3">
                        <h4 className='my-2'>Add a Document</h4>
                        <IoAddCircleOutline onClick={handleAddDoc} />
                    </div>
                </div>

                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#docModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="docModal" tabIndex="-1" aria-labelledby="docModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="docModalLabel">Add a Document</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={onSubmit}>
                                    <div className="mb-3">
                                        <input type="file" className="form-control" onChange={onFileChange} required />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Filename"
                                            value={filename}
                                            onChange={(e) => setFilename(e.target.value)}
                                            required
                                            minLength={5}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Upload Document</button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
};

export default AddDoc;
