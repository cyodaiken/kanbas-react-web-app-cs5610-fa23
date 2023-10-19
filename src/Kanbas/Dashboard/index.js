import { Link } from "react-router-dom";
import db from "../Database";
import "./dashboard.css";
import {FaBook} from "react-icons/fa";

function Dashboard() {
    const courses = db.courses;

    return (
        <div className="d-flex flex-column w-100 wd-dashboard">
            <h1>Dashboard</h1>
            <hr className="w-100" />
            <div className="container-fluid">
                
                <h4>Published Courses ({courses.length})</h4>
                <hr className="w-100" />

                <div className="row">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

            </div>
        </div>
    );
}

const CourseCard = ({course}) => {

    return (
        <div className="col-sm-6 col-md-4 col-xl-3 wd-dashboard"> 

            <div className="card">
            <img src="/images/baby-blue-color.png" class="card-img-top" />

                <div className="card-body">
                    <Link to={`/Kanbas/Courses/${course._id}`}>
                        {course.number} {course._id.substring(2)} {course.name}
                    </Link>

                    <p className="card-text-section"> {course._id}.{course.number.substring(2)}</p>
                    <p className="card-text-year">{course.startDate} Fall 2023 Semester Full Term</p>
                
                    <FaBook className="wd-icon" />

                </div>
            </div>
        </div>
    );
    
};

export default Dashboard;