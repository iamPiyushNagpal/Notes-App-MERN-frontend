import './Modal.css';
import axios from 'axios';
import { useState } from 'react';

const Modal = ({ note, setShowModal, getNotes }) => {

    const [titleUpdate, setTitleUpdate] = useState(note.title);
    const [descriptionUpdate, setDescriptionUpdate] = useState(note.description);
    const token = localStorage.getItem("userToken");

    const handleCloseButton = () => {
        setShowModal(false);
    }

    const handleDeleteNote = (e) => {
        e.preventDefault();
        axios.delete('https://notes-app-mern-backend.herokuapp.com/delete-note',
            { data: { id: note._id }, headers: { "Authorization": token } },
        )
            .then((res) => {
                console.log(res);
                setShowModal(false);
                getNotes(token);
            })
            .catch((e) => console.log(e.message))
    }

    const handleUpdateNote = async (e) => {
        e.preventDefault();

        axios.patch('https://notes-app-mern-backend.herokuapp.com/update-note',
            { id: note._id, title: titleUpdate, description: descriptionUpdate },
            { headers: { "Authorization": token } }
        )
            .then((res) => {
                console.log(res);
                setShowModal(false);
                getNotes(token);
            })
            .catch((e) => console.log(e.message))
    }

    return (
        <div className="modal">
            <div className="modal__center">
                <div className="modal__content">
                    <textarea
                        className="title"
                        type="text"
                        defaultValue={note.title}
                        onChange={(e) => setTitleUpdate(e.target.value)}
                    />
                    <textarea
                        className="description"
                        type="text"
                        defaultValue={note.description}
                        onChange={(e) => setDescriptionUpdate(e.target.value)}
                    />
                </div>
                <div className="modal__buttons">
                    <button onClick={handleDeleteNote}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg></button>
                    <button onClick={handleUpdateNote}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                    </svg></button>
                    <button onClick={handleCloseButton}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg></button>
                </div>
            </div>
        </div>

    );
}

export default Modal;