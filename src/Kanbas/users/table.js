import React, { useState, useEffect } from "react";
import * as client from "./client";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";
import { GiPencil } from "react-icons/gi";
import { Link } from "react-router-dom";

function UserTable() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };

    const [user, setUser] = useState({ username: "", password: "", role: "USER" });
    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };

    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => { fetchUsers(); }, []);

    return (
        <div className="ms-3 mt-3">
            <h1>User List</h1>

            <table className="table">

                <thead>
                    <tr>
                        <td>
                            <label htmlFor="username">Username</label>
                            <input className="form-control" id="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                        </td>

                        <td>
                            <label htmlFor="password">Password</label>
                            <input className="form-control" id="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        </td>

                        <td>
                            <label htmlFor="firstname">First Name</label>
                            <input className="form-control" id="firstname" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        </td>

                        <td>
                            <label htmlFor="lastname">Last Name</label>
                            <input className="form-control" id="lastname" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                        </td>

                        <td>
                            <label htmlFor="role">Role</label>
                            <select value={user.role} className="form-select" id="role" onChange={(e) => setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>

                        <td>
                            <button className="btn btn-success me-1 mt-1" onClick={updateUser}>
                                <CiCircleCheck />
                            </button>
                            <button className="btn btn-primary mt-1" onClick={createUser}>
                                <IoAddCircleOutline />
                            </button>
                        </td>
                    </tr>
                </thead>
            </table>

            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th></th>
                    </tr>

                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>
                                <Link to={`/Kanbas/account/${user._id}`}>
                                    {user.username}
                                </Link>
                            </td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>
                                <button className="btn btn-warning me-1">
                                    <GiPencil onClick={() => selectUser(user)} />
                                </button>
                                <button className="btn btn-danger me-1" onClick={() => deleteUser(user)}>
                                    <IoTrashOutline />
                                </button>
                            </td>

                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;