import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Notes from "../../components/Notes/Notes"
import { useHistory } from "react-router-dom";

const Home = () => {

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        console.log(token);
        if (!token)
            history.push('/login');
    }, []);

    return (
        <div className="home">
            <Navbar />
            <Notes />
        </div>
    );
}

export default Home;