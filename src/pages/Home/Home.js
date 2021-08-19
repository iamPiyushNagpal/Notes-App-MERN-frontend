import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Notes from "../../components/Notes/Notes"
import { useHistory } from "react-router-dom";
import NewNoteInput from "../../components/NewNoteInput/NewNoteInput";
import axios from "axios";

const Home = () => {

    const history = useHistory();
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        console.log(token);
        if (!token)
            history.push('/login');
        getNotes();
    }, []);

    const getNotes = () => {
        axios.get('http://localhost:3001/get-notes')
            .then((res) => {
                console.log(res);
                setData(res.data.notes);
            })
            .catch((e) => console.log(e.message))
    };

    const filterData = () => {
        if (!searchQuery)
            return data;

        return data.filter((note) => {
            return (
                note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                note.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        })
    }

    const filteredData = filterData();

    return (
        <div className="home">
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <NewNoteInput getNotes={getNotes} />
            <Notes getNotes={getNotes} data={filteredData} />
        </div>
    );
}

export default Home;