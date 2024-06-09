import React, { useState } from 'react';
import DocContext from "./docContext"


const DocProvider = (props) => {
    const host = 'https://pocket-storage-backend.onrender.com';
    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch Documents
    const fetchDocs = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${host}/api/docs/fetchdocs`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth_token': localStorage.getItem('token'),
                }
            });
            const data = await response.json();
            setDocs(data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.error(err);
        }
    };

    // Add Document
    const addDoc = async (formData) => {
        setLoading(true);
        try {
            const response = await fetch(`${host}/api/docs/adddocs`, {
                method: 'POST',
                headers: {
                    'auth_token': localStorage.getItem('token'),
                },
                body: formData
            });
            const data = await response.json();
            setDocs([...docs, data]);
            await fetchDocs();
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    // Delete Document
    const deleteDoc = async (id) => {
        setLoading(true);
        try {
            await fetch(`${host}/api/docs/deletedocs/${id}`, {
                method: 'DELETE',
                headers: {
                    'auth_token': localStorage.getItem('token'),
                }
            });
            await fetchDocs();
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.error(err);
        }
    };

    return (
        <DocContext.Provider
            value={{
                docs,
                fetchDocs,
                addDoc,
                deleteDoc,
                loading
            }}
        >
            {props.children}
        </DocContext.Provider>
    );
};

export default DocProvider;
