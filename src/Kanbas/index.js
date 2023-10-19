import {Routes, Route, Navigate} from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";


function Kanbas() {
    return (
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
    );
};

export default Kanbas; 