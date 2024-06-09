import React, { useContext, useEffect, useRef } from 'react';
import noteContext from '../context/notes/noteContext';
import photoContext from '../context/photos/photoContext';
import docContext from '../context/docs/docContext';
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Spiner from './Spiner';

const Home = () => {
    const navigate = useNavigate();
    const { notes, getNote } = useContext(noteContext);
    const { photos, fetchPhotos, loading: photosLoading } = useContext(photoContext);
    const { docs, fetchDocs } = useContext(docContext);

    const getNoteRef = useRef(getNote);
    const fetchPhotosRef = useRef(fetchPhotos);
    const fetchDocsRef = useRef(fetchDocs);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/welcome');
        } else {
            getNoteRef.current();
            fetchPhotosRef.current();
            fetchDocsRef.current();
        }
    }, [navigate]);

    // Combine all loading states to ensure proper spinner display
    const loading = photosLoading;

    return (
        loading ? <Spiner /> :
            <>
                <div className="mynotes row">
                    <h2 className='my-4'>Your Notes</h2>
                    {notes.length === 0 && <p>You don't have any note to display. Please add New Note.</p>}
                    {
                        notes.map((note) => (
                            <div className="card col-md-3 mx-3 my-3 mynote" key={note._id}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h5 className="card-title">{note.title}</h5>
                                    </div>
                                    <p className="card-text">{note.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='photoCon mynotes row'>
                    <h2 className='my-4'>Your Gallery</h2>
                    {photos.length === 0 && <p>You don't have any photo to display. Please add New Photo.</p>}
                    {photos.map(photo => (
                        <div className='photo mx-3 my-3' key={photo._id}>
                            <img src={photo.url} alt={photo.description} />
                        </div>
                    ))}
                </div>
                <div className='docCon mynotes row'>
                    <h2 className='my-4'>Your Documents</h2>
                    {docs.length === 0 && <p>You don't have any Document to display. Please add New Document.</p>}
                    {docs.map(doc => (
                        <div className='doc mx-3 my-3' key={doc._id}>
                            <h4>{doc.filename}</h4>
                            <div>
                                <a href={doc.url} target="_blank" rel="noopener noreferrer">
                                    <button className='btn btn-primary my-2 mx-3'><FaEye /></button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </>
    );
}

export default Home;
