import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAssignment, editAssignment } from '.././client.js';
import { addAssignment, updateAssignment } from '.././assignmentsReducer.js';

function AssignmentEditor({ creating }) {

    const { courseId, assignmentId } = useParams();
    
    const dispatch = useDispatch();

    let assignmentValue;

    const navigate = useNavigate();

    const temp = useSelector(state => state.assignmentsReducer.assignments);
    
    if (!creating) {
        assignmentValue = temp.find((assignment) => assignment._id === assignmentId);
    } else {
        assignmentValue = {
            title: "New Assignment",
            description: "New Assignment Description",
            points: "100",
            due_date: "2023-12-15",
            available_from: "2023-01-01",
            available_until: "2023-12-31",
            course: courseId
        }
    }

    const [assignment, setAssignment] = useState(assignmentValue);

    const handleAddAssignment = () => {
        createAssignment(courseId, assignment).then((assignment) => {
          dispatch(addAssignment({...assignment, course: courseId }));
        });
      };

      const handleUpdateAssignment = async () => {
        const status = await editAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };
    
    const handleSave = () => {
        if (!creating) {
            dispatch(updateAssignment(assignment));
            handleUpdateAssignment();
        } else {
            dispatch(addAssignment(assignment));
            handleAddAssignment();
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div className="flex-column w-100 wd-assignments">
            <hr />
            <form>
                <label className="form-label" htmlFor="text-fields-assignmentname">Assignment Name</label>
                <input className="form-control" id="text-fields-assignmentname"
                    placeholder="Assignment Name" value={assignment.title}
                    onChange={(e) => setAssignment({
                        ...assignment, title: e.target.value
                    })}

                /><br /><br />

                <textarea className="form-control" value={assignment.description} onChange={(e) => setAssignment({
                    ...assignment, description: e.target.value
                })}></textarea> <br />

                <div className="row m-3">
                    <div className="col-2">
                        <label className="form-label" htmlFor="text-fields-points1">Points</label>
                    </div>
                    <div className="col-10">
                        <input className="form-control" id="text-fields-points1" value={assignment.points} onChange={(e) => setAssignment({
                            ...assignment, points: e.target.value
                        })} />
                    </div>
                </div>

                <div className="row m-3">
                    <div className="col-2">
                        <p>Assign</p>
                    </div>
                    <div className="col-10">
                        <div className="container border p-3">
                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label" htmlFor="due">Due</label><br />
                                    <input type="date" id="due" value={assignment.due_date} onChange={(e) => setAssignment({
                                        ...assignment, due_date: e.target.value
                                    })} /><br /><br />
                                </div>
                                <div className="col-6">
                                    <label className="form-label" htmlFor="due">Available from:</label><br />
                                    <input type="date" id="due" value={assignment.available_from} onChange={(e) => setAssignment({
                                        ...assignment, available_from: e.target.value
                                    })} /><br /><br />
                                </div>
                                <div className="col-6">
                                    <label className="form-label" htmlFor="due">Until</label> <br />
                                    <input type="date" id="due" value={assignment.available_until} onChange={(e) => setAssignment({
                                        ...assignment, available_until: e.target.value
                                    })} /><br /><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
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