import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { removeAssignment, findAssignmentsForCourse } from './client.js';
import { deleteAssignment, selectAssignment, setAssignments } from "../Assignments/assignmentsReducer";
import "./assignments.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FaBook } from "react-icons/fa";

function Assignments() {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const assignments = useSelector(state => state.assignmentsReducer.assignments);

    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);

    const handleDeleteAssignment = (assignmentId) => {
        removeAssignment(assignmentId).then((status) => {
            dispatch(deleteAssignment(assignmentId));
        });
    };


    useEffect(() => {
        findAssignmentsForCourse(courseId)
            .then((assignments) =>
                dispatch(setAssignments(assignments))
            );
    }, [courseId]);

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

                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/new`}><button type="button" className="btn btn-danger">
                        <AiOutlinePlus />Assignment</button></Link>

                    <button type="button" className="btn btn-light"><BsThreeDotsVertical />
                    </button>
                </div>
            </div>

            <div className="list-group">
                <li className="list-group-item list-group-item-secondary">
                    Assignments  <span className="float-end border border-black rounded-pill">
                        <p className="p-0 m-0 px-2">40% of Total</p>
                    </span>
                </li>
                {courseAssignments.map((assignment) => (

                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item green-left-border">
                        <div className="row">
                            <div className="col-1"><FaBook /></div>
                            <div className="col-11">
                                {assignment.title}<button className="btn btn-danger float-end" onClick={(e) => { e.preventDefault(); handleDeleteAssignment(assignment._id); }}>Delete</button>
                                <p className="assignment-subtext">{assignment.description}</p>
                                <p className="assignment-subtext">Due: {assignment.due_date}</p>

                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;