import './Modal.css';
import axios from 'axios';

const Modal = ({ note, setShowModal, getNotes }) => {

    const handleCloseButton = () => {
        setShowModal(false);
    }

    const handleDeleteNote = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:3001/delete-note', {
            data: { id: note._id }
        })
            .then((res) => {
                console.log(res);
                setShowModal(false);
                getNotes();
            })
            .catch((e) => console.log(e.message))
    }

    return (
        <div className="modal">
            <div className="modal__content">
                <h1>{note.title}</h1>
                <p>{note.description}</p>
            </div>
            <div className="modal__buttons">
                <button onClick={handleDeleteNote}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg></button>
                <button onClick={handleCloseButton}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg></button>
            </div>
        </div>
    );
}

export default Modal;