import axios from 'axios';
import { useState } from 'react';
import './NewNoteInput.css';

const NewNoteInput = ({ getNotes }) => {

    const [showInputFields, setShowInputFields] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleInputFieldClick = () => {
        setShowInputFields(true);
    }

    const handleAddNewNote = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/create-note', {
            title,
            description
        })
            .then((res) => {
                console.log(res);
                setTitle("");
                setDescription("");
                getNotes();
            })
            .catch((e) => console.log(e.message))
    }

    return (
        <div className="new-note-input">
            <form onSubmit={handleAddNewNote}>
                <input
                    className={showInputFields ? "hidden" : "show"}
                    type="text"
                    placeholder="Add New Note"
                    onClick={handleInputFieldClick}
                />
                <input
                    className={!showInputFields ? "hidden" : "show"}
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    type="text"
                    cols={45}
                    className={!showInputFields ? "hidden" : "show"}
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className={!showInputFields ? "hidden" : "show"}>Add Note</button>
            </form>
        </div>
    );
}

export default NewNoteInput;