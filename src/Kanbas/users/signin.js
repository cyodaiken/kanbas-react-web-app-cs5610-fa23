import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/kanbas/account");
    };
    return (
        <div className="ms-3 mt-3">
            <h1>Sign in</h1>
            <label className="form-label" htmlFor="username">Username:</label><br></br>
            <input className="form-control" type="text" id="username" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} /><br />
            <label className="form-label" htmlFor="password">Password:</label><br></br>
            <input className="form-control" type="text" id="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} /><br />
            <button className="btn btn-danger" onClick={signin}> Sign in </button>
        </div >
    );
}
export default Signin;