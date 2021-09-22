import { useState } from 'react';
import './LogIn.css';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";

const LogIn = () => {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const logIn = (e) => {
        e.preventDefault();
        axios.post('https://notes-app-mern-backend.herokuapp.com/login', {
            email,
            password
        })
            .then((res) => {
                console.log(res);
                localStorage.setItem("userToken", res.data.token);
                history.push("/");
            })
            .catch((e) => {
                console.log(e.message);
                if (e.response.status === 403 || e.response.status === 404) {
                    setError("There was no account found matching the email and password you entered. Please check your email and password and try again.");
                }
            })
    }

    return (
        <div className="log-in">
            <form onSubmit={logIn}>
                <h1>Log In</h1>
                <p>{error}</p>
                <label>Email</label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Log In</button>
            </form>
            <p>Don't have an account? <Link className="signup-page-link" to="/signup">Sign Up here</Link></p>
        </div>
    );
}

export default LogIn;