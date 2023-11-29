import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Account() {
    const [account, setAccount] = useState(null);

    const navigate = useNavigate();

    const fetchAccount = async () => { const account = await client.account(); setAccount(account); };

    const save = async () => { await client.updateUser(account); };

    useEffect(() => { fetchAccount(); }, []);

    return (
        <div className="w-50 mt-3 ms-3">
            <h1>Account</h1>
            {account && (
                <div>
                    <label htmlFor="password">Password</label>

                    <input className="form-control" id="password" type="text" value={account.password}
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} />

                    <label htmlFor="firstname">First Name</label>

                    <input className="form-control" id="firstname" type="text" value={account.firstName}
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />

                    <label htmlFor="lastname">Last Name</label>
                    <input id="lastname" className="form-control" type="text" value={account.lastName}
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />

                    <label htmlFor="dateofbirth">Date of Birth</label>
                    <input id="dateofbirth" className="form-control" type="date" value={account.dob}
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} />

                    <label htmlFor="email">Email</label>
                    <input id="email" className="form-control" type="text" value={account.email}
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    <label htmlFor="account">Account</label>
                    <select id="account" className="form-select" onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>

                    <button className="btn btn-danger mt-2" onClick={save}>
                        Save
                    </button>< br/>
                    
                    <Link to="/Kanbas/admin/users" className="btn btn-secondary mt-2">
                        Users
                    </Link>

                </div>
            )}

        </div>
    );
}
export default Account;