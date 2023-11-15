import { Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./courses.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import axios from "axios";

function Courses() {

    const { courseId } = useParams();
    const { pathname } = useLocation();
    const [course, setCourse] = useState({});
    const URL = "http://localhost:4000/api/courses";

    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };

    const createBreadcrumb = () => {
        const path = pathname.split("/");
        return decodeURI(path[path.length - 1]);
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);


    return (
        <div className="wd-courses w-100">

            <div className=" d-none d-md-block">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><IoReorderThreeOutline className="wd-icon" /><span className="red-color">CS5610 FA23</span></li>
                        <li className="breadcrumb-item active">{createBreadcrumb()}</li>
                    </ol>
                </nav>
            </div>

            <hr className="w-100" />
            <div className="d-flex flex-row">
                <CourseNavigation />
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={< Assignments />} />
                    <Route path="Assignments/new" element={<AssignmentEditor
                        creating={true} />} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor
                        creating={false} />} />
                    <Route path="Grades" element={<Grades />} />
                </Routes>
            </div>

        </div>

    );
}
export default Courses;