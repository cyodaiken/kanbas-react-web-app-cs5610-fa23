import db from "../../Database";
import { useParams } from "react-router-dom";
import { BsFillGearFill} from "react-icons/bs";
import { FaFilter, FaFileExport, FaFileImport} from "react-icons/fa";



function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>

<div className="row my-2">
                        <div className="d-flex flex-row-reverse flex-row float-end">
                            <button className="m-2 btn btn-light" type="button"><BsFillGearFill /></button>
                            <button className="m-2 btn btn-light" type="button" id="dropdownMenuButton2"
                                data-bs-toggle="dropdown" aria-expanded="false"> <FaFileExport /> Export</button>
                          
                            <button className="m-2 btn btn-light" type="button"> <FaFileImport /> Import</button>
                        </div>
                    </div>

                    <div className="row my-2">
                        <div className="row">
                            <div className="col-6">Student Names</div>
                            <div className="col-6">Assignment Names</div>
                        </div>

                        <div className="row">
                            <div className="col-6"> <input className="form-select" type="studentname"
                                    placeholder="Search Students" id="text-fields-student-name" /></div>

                            <div className="col-6"><input className="form-select" type="assignmentname"
                                    placeholder="Search Assignments" id="text-fields-assignment-name" /></div>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-5">
                            <button className="btn btn-light"> <FaFilter /> Apply
                                Filters</button>
                        </div>
                    </div>


            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>

                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>
            
            );
}
export default Grades;