import { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import { Link } from "react-router-dom";

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        axios.post('https://notes-app-mern-backend.herokuapp.com/signup', {
            name,
            email,
            password
        })
            .then((res) => {
                console.log(res);
                setError(res.data.message);
            })
            .catch((e) => console.log(e.message))
    }

    return (
        <div className="sign-up">
            <form onSubmit={signUp}>
                <h1>Sign Up</h1>
                <p>{error}</p>
                <label>Name</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    minLength={6}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Sign Up</button>
            </form>
            <p>Already have an account? <Link className="login-page-link" to="/login">Log In here</Link></p>
        </div>
    );
}

export default SignUp;