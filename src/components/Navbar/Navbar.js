import './Navbar.css';
import { useHistory } from "react-router-dom";

const Navbar = () => {

    const history = useHistory();

    const handleLogOut = () => {
        localStorage.removeItem("userToken");
        history.push("/login");
    }

    return (
        <div className="navbar">
            <h1>Notes App</h1>
            <input
                type="text"
                placeholder="Search"
            />
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
}

export default Navbar;