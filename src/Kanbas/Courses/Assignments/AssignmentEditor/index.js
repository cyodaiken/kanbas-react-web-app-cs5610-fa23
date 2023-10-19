import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div className="flex-column w-100 wd-assignments">

            <div className="align-items-end text-end">
                Published
                <button type="button" className="btn btn-light">
                    <BsThreeDotsVertical /> </button>
            </div>
            <hr />
            <p>Assignment Name</p>
            <input value={assignment.title}
                className="form-control mb-2" />

            <form action="\Kanbas\Courses\Assignments\index.html">

                <label className="form-label" for="text-fields-assignmentname">Assignment Name</label>
                <input className="form-control" id="text-fields-assignmentname" value="A1 - ENV + HTML"
                    placeholder="Assignment Name" /> <br /><br />

                <textarea className="form-control">This is the assignment description.</textarea> <br />

                <div className="row m-3">
                    <div className="col-2">
                        <label className="form-label" for="text-fields-points1">Points</label>
                    </div>

                    <div className="col-10">
                        <input className="form-control" id="text-fields-points1" value="100" />
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col-2">
                        <label className="form-label" for="assignmentgroup">Assignment Group</label>
                    </div>

                    <div className="col-10">
                        <select className="form-select" id="assignmentgroup">
                            <option select value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col-2">
                        <label className="form-label" for="gradedisplay">Display Grade as</label>
                    </div>

                    <div className="col-10">

                        <select className="form-select" id="gradedisplay">
                            <option select value="PERCENTAGE">Percentage</option>
                        </select>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col-2">
                        <label className="form-label" for="submissiontype">Submission Type</label>
                    </div>

                    <div className="col-10">

                        <div className="container border p-3">
                            <select className="form-select" id="submissiontype">
                                <option select value="ONLINE">Online</option>
                            </select><br />

                            <p>Online Entry Options</p>
                            <input className="form-check-input checkbox-margin" type="checkbox" value="TEXTENTRY" id="TextEntry" />
                            <label className="form-check-label" for="TextEntry">Text Entry</label> <br /><br />
                            <input className="form-check-input checkbox-margin" type="checkbox" value="WEBSITE URL"
                                id="WebsiteURL" />
                            <label className="form-check-label" for="WebsiteURL">Website URL</label><br /><br />
                            <input className="form-check-input checkbox-margin" type="checkbox" value="MEDIARECORDINGS"
                                id="MediaRecordings" />
                            <label className="form-check-label" for="MediaRecordings">Media
                                Recordings</label><br /><br />
                            <input className="form-check-input checkbox-margin" type="checkbox" value="STUDENTANNOTATION"
                                id="StudentAnnotation" />
                            <label className="form-check-label" for="StudentAnnotation">Student
                                Annotation</label><br /><br />
                            <input className="form-check-input checkbox-margin" type="checkbox" value="FILEUPLOAD"
                                id="FileUploads" />
                            <label className="form-check-label" for="FileUploads">File Uploads</label>

                            <div className="p-4">
                                <input class="form-check-input checkbox-margin" type="checkbox" value="restrictFileTypes"
                                    id="FileUploads" />
                                <label class="form-check-label" for="restrictFileTypes">Restrict File
                                    Types</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col-2">
                        <label className="form-label" for="submissionattemps">Submission Attempts</label>
                    </div>

                    <div className="col-10">
                        <div className="container border p-3">
                            <p>Allow Attempts</p>
                            <select className="form-select" id="submissionattempts">
                                <option select value="UNLIMITED">Unlimited</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col-2">
                        <label className="form-label" for="plagiarismreview">Plagiarism Review</label>
                    </div>

                    <div className="col-10">
                        <div className="container border p-3">
                            <select className="form-select" id="plagiarismreview">
                                <option select value="NONE">None</option>
                            </select>
                            <hr />
                            <select className="form-select" id="plagiarismnotify">
                                <option select value="NONE">Immediately</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col-2">
                        <p>Group Assignment</p>
                    </div>

                    <div className="col-10">
                        <div className="container border p-3">
                            <input className="form-check-input checkbox-margin" type="checkbox" value="GROUPASSIGN"
                                id="GroupAssign" />
                            <label class="form-check-label" for="GroupAssign"> This is a group
                                assignment</label><br />
                        </div>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col-2">
                        <p>Peer Reviews</p><br />
                    </div>

                    <div className="col-10">
                        <div className="containter border p-3">
                            <input className="form-check-input checkbox-margin" type="checkbox" value="PEERREVIEW"
                                id="PeerReview" />
                            <label className="form-check-label" for="PeerReview">Require Peer Reviews</label>
                        </div>
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col-2">
                        <p>Assign</p>
                    </div>

                    <div className="col-10">
                        <div className="containter border p-3">
                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label" for="text-fields-assign">Assign to</label><br />
                                    <input className="form-control" id="text-fields-assign" value="Everyone" />
                                    <br />
                                </div>
                                <div className="col-12">
                                    <label className="form-label" for="due">Due</label> <br />
                                    <input type="date" id="due" value="2021-01-01" /> <br /> <br />
                                </div>
                                <div className="col-6">
                                    <label className="form-label" for="due">Available from:</label><br />
                                    <input type="date" id="due" value="2021-01-01" /> <br /> <br />
                                </div>
                                <div className="col-6">
                                    <label className="form-label" for="due">Until</label> <br />
                                    <input type="date" id="due" value="2021-01-01" /> <br /> <br />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <hr />

                <input className="form-check-input checkbox-margin" type="checkbox" id="NotifyUsers" />
                <label className="form-check-label" for="NotifyUsers">Notify users that this content has
                    changed</label>

            </form>

            <button onClick={handleSave} className="btn btn-danger float-end">
                Save
            </button>

            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-light float-end">
                Cancel
            </Link>

            
        </div>
    );
}


export default AssignmentEditor;