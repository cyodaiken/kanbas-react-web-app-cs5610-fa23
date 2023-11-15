import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: [],
    assignment: { title: "New Title" }
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {

        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
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
    updateAssignment, selectAssignment, setAssignments } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;