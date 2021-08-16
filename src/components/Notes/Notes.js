import { useEffect, useState } from 'react';
import axios from 'axios';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import './Notes.css';

const Notes = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/get-notes')
            .then((res) => {
                console.log(res);
                setData(res.data.notes);
            })
            .catch((e) => console.log(e.message))
    }, []);

    return (
        <div className="notes">
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4, 1200: 5 }}>
                <Masonry gutter={20}>
                    {data && data.map((note) => (
                        <div className="note" key={note._id}>
                            <h1>{note.title}</h1>
                            <p>{note.description.slice(0, 70)}</p>
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
}

export default Notes;