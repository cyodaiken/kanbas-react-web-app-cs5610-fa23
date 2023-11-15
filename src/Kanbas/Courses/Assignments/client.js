import axios from "axios";

const COURSES_URL = "http://localhost:4000/api/courses";
const ASSIGNMENTS_URL = "http://localhost:4000/api/assignments";

export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};

export const removeAssignment = async (assignmentId) => {
    const response = await axios
        .delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
    return response.data;
};

export const editAssignment = async (assignment) => {
    const response = await axios.put(`${ASSIGNMENTS_URL}/${assignment._id}`, assignment);
    return response.data;
};

export const findAssignmentsForCourse = async (coursesId) => {

    const response = await axios
        .get(`${COURSES_URL}/${coursesId}/assignments`);
    return response.data;

};
