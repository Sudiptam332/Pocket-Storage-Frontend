import React, { useState, useContext, useEffect, useRef, useCallback } from 'react';
import photoContext from '../context/photos/photoContext';
import { MdDelete } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Spiner from './Spiner';

const AddPhoto = () => {
    const navigate = useNavigate();
    const { photos, addPhoto, fetchPhotos, deletePhoto, loading } = useContext(photoContext);

    const [photo, setPhoto] = useState(null);
    const [description, setDescription] = useState('');
    const ref = useRef();
    const refClose = useRef();

    // Create stable references for functions
    const fetchPhotosRef = useRef(fetchPhotos);
    const addPhotoRef = useRef(addPhoto);
    const deletePhotoRef = useRef(deletePhoto);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        } else {
            fetchPhotosRef.current();
        }
    }, [navigate]);

    const onFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', photo);
        formData.append('description', description);
        addPhotoRef.current(formData);
        refClose.current.click();
    };

    const handleDelete = useCallback((photoId) => {
        deletePhotoRef.current(photoId);
    }, []);

    const handleAddPhoto = () => {
        setPhoto(null);
        setDescription('');
        ref.current.click();
    };

    return (
        loading ? <Spiner /> :
            <>
                <div className='photoCon mynotes row'>
                    <h2 className='my-4'>Your Gallery</h2>
                    {photos.map(photo => (
                        <div className='photo mx-3 my-3' key={photo._id}>
                            <img src={photo.url} alt={photo.description} />
                            <button className='btn btn-danger my-2' onClick={() => handleDelete(photo._id)}><MdDelete /></button>
                        </div>
                    ))}

                    <div className="addPhoto mx-3 my-3">
                        <h4 className='my-2'>Add a Photo</h4>
                        <IoAddCircleOutline className='addIcon my-5' onClick={handleAddPhoto} />
                    </div>
                </div>

                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#photoModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="photoModal" tabIndex="-1" aria-labelledby="photoModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="photoModalLabel">Add a Photo</h5>
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
                                            placeholder="Description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            required
                                            minLength={5}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Upload Photo</button>
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

export default AddPhoto;
