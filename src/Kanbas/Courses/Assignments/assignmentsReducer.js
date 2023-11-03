import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
    assignments: db.assignments,
    assignment: { title: "MyTitle" }
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {

        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments
            ]

        },

        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });

        },

        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload);
        },

        selectAssignment: (action, state) => {
            state.assignment = action.payload;

        }
    }
});

export const { addAssignment, deleteAssignment,
    updateAssignment, selectAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;