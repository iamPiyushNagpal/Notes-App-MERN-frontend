import { useState } from 'react';
import './LogIn.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const LogIn = () => {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {
            email,
            password
        })
            .then((res) => {
                console.log(res);
                localStorage.setItem("userToken", res.data.token);
                history.push("/");
            })
            .catch((e) => console.log(e.message))
    }

    return (
        <div className="log-in">
            <form onSubmit={logIn}>
                <h1>Log In</h1>
                <label>Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Log In</button>
            </form>
        </div>
    );
}

export default LogIn;