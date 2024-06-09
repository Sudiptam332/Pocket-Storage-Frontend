import React, { useState } from 'react'
import PhotoContext from "./photoContext"

const PhotoState = (props) => {
    const host = 'https://pocket-storage-backend.onrender.com'
    const photosInitial = []
    const [photos, setPhotos] = useState(photosInitial);
    const [loading, setLoading] = useState(false);

    //Add Photo
    const addPhoto = async (formData) => {
        setLoading(true);
        try {
            const response = await fetch(`${host}/api/photos/addphoto`, {
                method: 'POST',
                headers: {
                    "auth_token": localStorage.getItem('token')
                },
                body: formData
            });
            const result = await response.json();
            console.log(result);
            await fetchPhotos();
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.error('Error:', err);
        }
    }
    // Get Photo
    const fetchPhotos = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${host}/api/photos/fetchphotos`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth_token': localStorage.getItem('token')
                }
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Server Error: ${errorText}`);
            }

            const data = await response.json();
            setPhotos(data);
            setLoading(false);

        } catch (err) {
            setLoading(false);
            console.error('Error:', err);
        }
    };

    //Delete Photo
    const deletePhoto = async (photoId) => {
        setLoading(true);
        try {
            const response = await fetch(`${host}/api/photos/deletephoto/${photoId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth_token': localStorage.getItem('token')
                }
            });
            await fetchPhotos();
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.error('Error:', err);
        }
    };

    return (
        <PhotoContext.Provider value={{ photos, addPhoto, fetchPhotos, deletePhoto, loading }}>
            {props.children}
        </PhotoContext.Provider>
    )
}

export default PhotoState