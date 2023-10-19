import "./modules.css";


function CourseStatus() {

    return (
        <div className="d-flex flex-column d-none d-lg-block wd-modules">

            <p>Course Status</p>

            <div className="row">
                <div className="d-flex flex-row">
                    <button type="button" className="btn btn-light">
                        Unpublish</button>
                    <button type="button" className="btn btn-success">
                        Published</button>
                </div>
            </div>

            <div className="col">
                <div className="d-flex flex-column">
                    <button type="button" className="btn btn-light">
                        Import Existing Content
                    </button>
                    <button type="button" className="btn btn-light">
                        Import From Commons</button>
                    <button type="button" className="btn btn-light">
                        Choose Home Page</button>
                    <button type="button" className="btn btn-light">
                        View Course Stream</button>
                    <button type="button" className="btn btn-light">
                        New Announcement</button>
                    <button type="button" className="btn btn-light">
                        New Analytics</button>
                    <button type="button" className="btn btn-light">
                        View Course Notifications</button>
                </div >
            </div>

            <br />

            <p className="small-text"> Coming Up <a href="#" className="text-red"> View
                Calendar</a></p>
            <hr />

            <ul className="list-group">
                <li className="list-group-item border-0"><a href="#" className="text-red">
                    <p>Lecture </p>
                </a>
                    <p className="small-text">CS4550.12631.202410 Sep
                        7 at 11:45am</p>

                </li>
                <li className="list-group-item border-0"><a href="#" className="text-red">
                    <p>Lecture </p>
                </a>
                    <p className="small-text">CS4550.12631.202410 Sep
                        7 at 11:45am</p>

                </li>
                <li className="list-group-item border-0"><a href="#" className="text-red">
                    <p>Lecture </p>
                </a>
                    <p className="small-text">CS4550.12631.202410 Sep
                        7 at 11:45am</p>
                </li>
            </ul>
        </div>

    );


};

export default CourseStatus;