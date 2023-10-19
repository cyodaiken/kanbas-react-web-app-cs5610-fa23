import "./modules.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TiCancel } from "react-icons/ti";
import { BiImport } from "react-icons/bi";
import { BsLifePreserver, BsFileBarGraph, BsBellFill } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";
import { AiTwotoneCalendar } from "react-icons/ai";

function CourseStatus() {

    return (
        <div className="d-flex flex-column d-none d-lg-block wd-modules">

            <p>Course Status</p>

            <div className="row">
                <div className="d-flex flex-row">
                    <button type="button" className="btn btn-light">
                        <TiCancel /> Unpublish</button>
                    <button type="button" className="btn btn-success">
                        <IoIosCheckmarkCircleOutline /> Published</button>
                </div>
            </div>

            <div className="col">
                <div className="d-flex flex-column">
                    <button type="button" className="btn btn-light">
                        <BiImport /> Import Existing Content
                    </button>
                    <button type="button" className="btn btn-light">
                        <BiImport /> Import From Commons</button>
                    <button type="button" className="btn btn-light">
                        <BsLifePreserver /> Choose Home Page</button>
                    <button type="button" className="btn btn-light">
                        <BsFileBarGraph /> View Course Stream</button>
                    <button type="button" className="btn btn-light">
                        <TfiAnnouncement /> New Announcement</button>
                    <button type="button" className="btn btn-light">
                        < BsFileBarGraph /> New Analytics</button>
                    <button type="button" className="btn btn-light">
                        <BsBellFill /> View Course Notifications</button>
                </div >
            </div>

            <br />

            <p className="small-text"> Coming Up <a href="#" className="text-red float-end"> <AiTwotoneCalendar /> View Calendar</a></p>
            <hr />

            <ul className="list-group">
                <li className="list-group-item border-0"><a href="#" className="text-red">
                    <p><AiTwotoneCalendar /> Lecture</p>
                </a>
                    <p className="small-text">CS4550.12631.202410 Sep
                        7 at 11:45am</p>

                </li>
                <li className="list-group-item border-0"><a href="#" className="text-red">
                    <p><AiTwotoneCalendar /> Lecture</p>
                </a>
                    <p className="small-text">CS4550.12631.202410 Sep
                        7 at 11:45am</p>

                </li>
                <li className="list-group-item border-0"><a href="#" className="text-red">
                    <p><AiTwotoneCalendar /> Lecture</p>
                </a>
                    <p className="small-text">CS4550.12631.202410 Sep
                        7 at 11:45am</p>
                </li>
            </ul>
        </div>

    );


};

export default CourseStatus;