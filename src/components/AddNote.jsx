import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import { IoAddCircleOutline } from "react-icons/io5";
import { Button, Modal, Form } from 'react-bootstrap';


const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        handleClose();
    };

    return (
        <>
            <div className="addNote mx-3">
                <h4 className='my-2'>Add a Note</h4>
                <IoAddCircleOutline className='addIcon' onClick={handleShow} />
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={note.title}
                                onChange={onChange}
                                required
                                minLength={5}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={note.description}
                                onChange={onChange}
                                required
                                minLength={5}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formTag">
                            <Form.Label>Tag</Form.Label>
                            <Form.Control
                                type="text"
                                name="tag"
                                value={note.tag}
                                onChange={onChange}
                                required
                                minLength={3}
                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Save changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddNote;
