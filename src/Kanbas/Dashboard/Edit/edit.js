import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./edit.css";

function EditDashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }) {

    return (

        <div className="d-flex flex-column w-100 wd-edit-dashboard">
            <h1>Dashboard</h1>
            <hr className="w-100" />
            <h4>Published Courses ({courses.length})</h4>
            <hr className="w-100" />
            <div className="d-flex flex-row mb-2">
                <input value={course.name} onChange={e => setCourse({ ...course, name: e.target.value })} className="form-control m-1" />
                <input value={course.number} onChange={e => setCourse({ ...course, number: e.target.value })} className="form-control m-1" />
                <input value={course.startDate} onChange={e => setCourse({ ...course, startDate: e.target.value })} className="form-control m-1" type="date" />
                <input value={course.endDate} onChange={e => setCourse({ ...course, endDate: e.target.value })} className="form-control m-1" type="date" />
                <button className="btn btn-success float-end" onClick={addNewCourse}>Add</button>
                <button className="btn btn-primary float-end" onClick={updateCourse} >Update</button>
            </div>

            <div className="list-group">
                {courses.map((course) => (
                    <Link className="list-group-item" key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}>
                        {course.name}
                        <button className="btn btn-danger float-end" onClick={(event) => { event.preventDefault(); deleteCourse(course._id); }}>
                            Delete
                        </button>

                        <button className="btn btn-warning float-end" onClick={(event) => { event.preventDefault(); setCourse(course); }}>
                            Edit
                        </button>


                    </Link>


                ))}
            </div>
        </div>
    );
}

export default EditDashboard;