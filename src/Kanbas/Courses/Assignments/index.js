import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import "./assignments.css";
import { FaBook } from "react-icons/fa";


function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="wd-assignments w-100">
            <div className="row">
                <div className="col-5">
                    <input type="assignment" className="form-control text-area-width"
                        placeholder="Search for Assignments" id="text-fields-assignment" />
                </div>

                <div className="col-7 align-items-end text-end">
                    <button type="button" className="btn btn-light">
                        <AiOutlinePlus />Group</button>
                    <button type="button" className="btn btn-danger">
                        Assignment</button>
                    <button type="button" className="btn btn-light"><BsThreeDotsVertical />
                    </button>
                </div>
            </div>

            <div className="list-group">
                <li className="list-group-item list-group-item-secondary">
                    Assignments  <span class="float-end border border-black rounded-pill">
                        <p class="p-0 m-0 px-2">40% of Total</p>
                    </span>
                </li>
                {courseAssignments.map((assignment) => (
                    <>
                        <Link
                            key={assignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            className="list-group-item green-left-border">
                            <div className="row">
                                <div className="col-1"><FaBook /></div>
                                <div className="col-11">
                                    {assignment.title}
                                    <p className="assignment-subtext">Multiple Modules</p>
                                    <p className="assignment-subtext">Due: Jan 2 | 100 pts</p>
                                </div>
                            </div>
                        </Link>
                    </>

                ))}
            </div>
        </div>
    );
}
export default Assignments;