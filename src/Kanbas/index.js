import { Routes, Route, Navigate, useLocation } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import EditDashboard from "./Dashboard/Edit/edit.js";
import Dashboard from "./Dashboard/View";
import Courses from "./Courses";
import { BsChevronDown } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import "./kanbas.css";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./users/signin";
import Account from "./users/account"

function Kanbas() {

    const { pathname } = useLocation();

    const [courses, setCourses] = useState([]);

    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });

    // const URL = 'https://kanbas-node-server-app-cy-4d8074c64cff.herokuapp.com/api/courses';

    const API_BASE = process.env.REACT_APP_API_BASE;

    const URL = `${API_BASE}/courses`;

    const createBreadcrumb = () => {
        const path = pathname.split("/");
        return path[path.length - 1];
    };

    const findAllCourses = async () => {
        console.log(URL);
        const response = await axios.get(URL);
        setCourses(response.data);
    };

    useEffect(() => {
        findAllCourses();
    }, []);

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses(
            [response.data, ...courses, { ...course, _id: new Date().getTime().toString() }]);
    };

    const deleteCourse = async (courseId) => {
        const response = await axios.delete(
            `${URL}/${courseId}`
        )
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = async () => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        findAllCourses();
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
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
            </div>

        </Provider>
    );
};

export default Kanbas; 