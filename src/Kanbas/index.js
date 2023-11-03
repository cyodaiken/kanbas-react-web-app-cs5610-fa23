import { Routes, Route, Navigate, Location, useLocation } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import EditDashboard from "./Dashboard/Edit/edit.js";
import Dashboard from "./Dashboard/View";
import Courses from "./Courses";
import { BsChevronDown } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import "./kanbas.css";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {

    const { pathname } = useLocation();
    const createBreadcrumb = () => {
        const path = pathname.split("/");
        return path[path.length - 1];
    };
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = () => {
        setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
    };
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <Provider store={store}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 d-md-none">
                <div className="wd-kanbas container-fluid">
                    <a href="#"><FaBars /></a>
                    <p>{createBreadcrumb()}</p>
                    <a href="#"><BsChevronDown /></a>
                </div>
            </nav>

            <div className="d-flex">
                <KanbasNavigation />
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<Account />} />
                    <Route path="Dashboard/*" element={<Dashboard courses={courses} />} />
                    <Route path="EditDashboard/*" element={<EditDashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse} />
                    } />
                    <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                </Routes>
            </div>

        </Provider>
    );
};

export default Kanbas; 