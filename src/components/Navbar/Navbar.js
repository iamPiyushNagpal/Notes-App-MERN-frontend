import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Notes App</h1>
            <input
                type="text"
                placeholder="Search"
            />
            <button>Log Out</button>
        </div>
    );
}

export default Navbar;