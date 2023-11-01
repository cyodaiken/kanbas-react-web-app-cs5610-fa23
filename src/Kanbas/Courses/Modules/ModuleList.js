import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./modules.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function ModuleList() {
    const { courseId } = useParams();
    const [modules, setModules] = useState(db.modules);
    const [module, setModule] = useState({
        name: "New Module",
        description: "New Description",
        course: courseId,
    });

    const addModule = (module) => {
        setModules([
            { ...module, _id: new Date().getTime().toString() },
            ...modules,
        ]);
    };

    const deleteModule = (moduleId) => {
        setModules(modules.filter(
            (module) => module._id !== moduleId));
    };

    const updateModule = () => {
        setModules(
            modules.map((m) => {
                if (m._id === module._id) {
                    return module;
                } else {
                    return m;
                }
            })
        );
    }

    return (
        <div className="wd-modules d-flex flex-column px-2 w-100">
            <div className="d-flex flex-column w-100 p-3">

                <div className="row">
                    <div className="col-7">
                        <input className="form-control" value={module.name}
                            onChange={(e) => setModule({
                                ...module, name: e.target.value
                            })}
                        />
                    </div>
                    <button className="btn btn-secondary col-2" onClick={() => { updateModule(module) }}>Update</button>
                    <button className="btn btn-success col-2" onClick={() => { addModule(module) }}>Add</button>
                </div>

                <div className="row mb-5">
                    <div className="col-7">
                        <textarea className="form-control" value={module.description}
                            onChange={(e) => setModule({
                                ...module, description: e.target.value
                            })}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="d-flex flex-row-reverse float-end">
                        <button type="button" className="btn btn-light"><BsThreeDotsVertical /></button>
                        <button type="button" className="btn btn-danger float-end"> <AiOutlinePlus /> Module</button>

                        <button className="btn btn-light dropdown-toggle float-end" type="button"
                            data-bs-toggle="dropdown"> <IoIosCheckmarkCircleOutline /> Publish All
                        </button>
                        <button type="button" className="btn btn-light float-end">View Progress</button>
                        <button type="button" className="btn btn-light float-end">Collapse All</button>
                    </div>

                </div>
                <hr />

                <div className="d-flex flex-row wd-flex-grow-1">
                    <div className="wd-modules w-100">
                        <ul className="list-group">
                            {
                                modules.filter((module) => module.course === courseId)
                                    .map((module, index) => (
                                        <div key={index} >
                                            <li className="list-group-item list-group-item-secondary">
                                                <p>
                                                    {module.name} 
                                                    <button className="float-end btn btn-danger"
                                                        onClick={() => deleteModule(module._id)}>
                                                        Delete
                                                    </button>
                                                    <button className="float-end btn btn-secondary"
                                                        onClick={(event) => { setModule(module); }}>
                                                        Edit
                                                    </button>

                                                </p>
                                            </li>

                                            <li className="list-group-item">
                                                {module.description}
                                            </li>
                                        </div>
                                    ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModuleList;