import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { FaBook } from "react-icons/fa";

function Dashboard({ courses }) {

    return (
        <div className="d-flex flex-column w-100 wd-dashboard">
            <h1>Dashboard</h1>

            <hr className="w-100" />

            <div className="row">
                <div className="col-9"><h4>Published Courses ({courses.length})</h4></div>
                <Link className="col-3" to={`/Kanbas/EditDashboard`}><button className="btn btn-danger float-end">Edit</button></Link>
            </div>

            <hr className="w-100" />

            <div className="container-fluid">
                <div className="row">
                    {courses.map((course) => (
                        <CourseCard key={course._id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const CourseCard = ({ course }) => {

    return (
        <div className="col-sm-6 col-md-4 col-xl-3 wd-dashboard">

            <div className="card">
                <Link to={`/Kanbas/Courses/${course._id}`}>

                    <img src="/images/baby-blue-color.png" className="card-img-top" />

                    <div className="card-body">

                        {course.number} {course._id.toString().substring(2)} {course.name}

                        <p className="card-text-section"> {course._id}.{course.number.substring(2)}</p>
                        <p className="card-text-year">{course.startDate} {course.startDate}</p>

                        <FaBook className="wd-icon" />

                    </div>
                </Link>
            </div>
        </div>
    );

};

export default Dashboard;