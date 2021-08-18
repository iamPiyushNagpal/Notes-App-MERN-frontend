import { useEffect, useState } from 'react';
import axios from 'axios';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import './Notes.css';
import Modal from '../Modal/Modal';

const Notes = () => {

    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3001/get-notes')
            .then((res) => {
                console.log(res);
                setData(res.data.notes);
            })
            .catch((e) => console.log(e.message))
    }, []);

    const handleModal = (title, description) => {
        setShowModal(true);
        setTitle(title);
        setDescription(description);
    }

    return (
        <div className="notes">
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4, 1200: 5 }}>
                <Masonry gutter={"20px"}>
                    {data && data.map((note) => (
                        <div className="note" key={note._id} onClick={() => handleModal(note.title, note.description)}>
                            <h1>{note.title}</h1>
                            <p>{note.description.slice(0, 70)}</p>
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            {showModal && <Modal setShowModal={setShowModal} title={title} description={description} />}
        </div>
    );
}

export default Notes;