import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import './Notes.css';
import Modal from '../Modal/Modal';

const Notes = ({ data, getNotes }) => {

    const [showModal, setShowModal] = useState(false);
    const [note, setNote] = useState(null);

    const handleModal = (note) => {
        setShowModal(true);
        setNote(note);
    }

    return (
        <div className="notes">
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4, 1200: 5 }}>
                <Masonry gutter={"20px"}>
                    {data && data.map((note) => (
                        <div className="note" key={note._id} onClick={() => handleModal(note)}>
                            <h1>{note.title}</h1>
                            <p>{note.description.slice(0, 70)}</p>
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            {showModal && <Modal setShowModal={setShowModal} note={note} getNotes={getNotes} />}
        </div>
    );
}

export default Notes;