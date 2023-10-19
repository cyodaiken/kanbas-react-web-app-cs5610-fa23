import "./kanbasNavigation.css";
import { Link, useLocation } from "react-router-dom";
import {BiUserCircle, BiHelpCircle, BiLogoCreativeCommons} from "react-icons/bi";
import {RiDashboard3Fill} from "react-icons/ri";
import {FaBook} from "react-icons/fa";
import { BsFillInboxFill, BsFillPlayBtnFill, BsFillCalendar2WeekFill, BsClockHistory } from "react-icons/bs";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    
    const linkToIconMap = {
        Account: <BiUserCircle className="wd-icon white-icon"/>,
        Dashboard: <RiDashboard3Fill className="wd-icon"/>,
        Courses: <FaBook className="wd-icon"/>,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon"/>,
        Inbox: <BsFillInboxFill className="wd-icon" />,
        History: <BsClockHistory className="wd-icon" />,
        Studio: <BsFillPlayBtnFill className="wd-icon" />,
        Commons: <BiLogoCreativeCommons className="wd-icon" />,
        Help: <BiHelpCircle className="wd-icon" />
    }
    
    const { pathname } = useLocation();
    return (
        <div className="list-group wd-kanbas-navigation">

        <img src="/images/NU_RGB.png" />

            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    
                   {linkToIconMap[link]}
                    
                    <p>{link}</p>

                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;