import { Routes, Route, Navigate, Location, useLocation } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import "./kanbas.css";

function Kanbas() {
    const { pathname } = useLocation();

    // console.log(pathname);

    const createBreadcrumb = () => {
        const path = pathname.split("/");

        return path[path.length - 1];

    };


    // console.log(createBreadcrumb());

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 d-md-none">
                <div className="wd-kanbas container-fluid">
                    <a href="#"><FaBars /></a>
                    {/* <p style="color: white">CS 5610</p> */}
                    <p>{createBreadcrumb()}</p>
             
                    <a href="#"><BsChevronDown /></a>
                </div>
            </nav>

            {/* <nav className="navbar navbar-expand-lg navbar-light bg-white w-100 float-end">
                <div className="row w-100 align-items-end float-end">
                    <a href="/Kanbas/Courses/Home/home.html"><AiOutlineClose /></a>
                </div>
            </nav> */}

            <div className="d-flex">
                <KanbasNavigation />
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<Account />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                    {/* <Route path="/Calendar" element={<h1>Calendar</h1>} /> */}
                </Routes>
            </div>

        </>
    );
};

export default Kanbas; 