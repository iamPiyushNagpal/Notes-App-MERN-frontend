import './Navbar.css';
import { useHistory } from "react-router-dom";

const Navbar = ({ setSearchQuery, searchQuery }) => {

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
}

export default Navbar;