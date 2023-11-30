import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/Kanbas/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div className="ms-3 mt-3">
            <h1>Sign up</h1>
            {error && <div>{error}</div>}
            <label className="form-label" htmlFor="username">Username:</label><br></br>
            <input
                className="form-control"
                id="username"
                value={credentials.username}
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value
                })} />
            <label className="form-label" htmlFor="password">Password:</label><br></br>
            <input
                className="form-control"
                id="password"
                value={credentials.password}
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value
                })} />
            <button className="btn btn-danger mt-2" onClick={signup}>
                Sign up
            </button>
        </div>
    );
}
export default Signup;