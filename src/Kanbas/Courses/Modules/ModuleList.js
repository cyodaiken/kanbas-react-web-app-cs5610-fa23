import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./modules.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div className="wd-modules d-flex flex-column">
            <div className="d-flex flex-column w-100 p-3">

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
                                modules
                                    .filter((module) => module.course === courseId)
                                    .map((module, index) => (
                                        <div key={index} >
                                            <li className="list-group-item list-group-item-secondary">
                                                {module.name}

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