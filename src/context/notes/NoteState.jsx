import React, { useState } from 'react'
import NoteContext from "./noteContext"

const NoteState = (props) => {
  const host = 'https://pocket-storage-backend.onrender.com'
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);
  const [loading, setLoading] = useState(false);

  //Get Notes
  const getNote = async () => {
    setLoading(true);
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth_token": localStorage.getItem('token')
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
    setLoading(false);
  }

  // ADD Note
  const addNote = async (title, description, tag) => {
    setLoading(true);
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth_token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });

    await getNote();
    setLoading(false);
  }

  // Delete Note
  const deleteNote = async (id) => {
    setLoading(true);
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth_token': localStorage.getItem('token')
      }
    });

    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);
    setLoading(false);
  }

  // Update Note
  const editNote = async (id, title, description, tag) => {
    setLoading(true);
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth_token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });

    await getNote();
    setLoading(false);
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, getNote, addNote, deleteNote, editNote, loading }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState