import { ADD_COMPLETED, SET_COMPLETED } from "../actions";

const toDoCompletedReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_COMPLETED:
            return [...state, { id: new Date().getTime(), heading: action.payload.heading, description: action.payload.description }];
        case SET_COMPLETED:
            return [...action?.payload];
        default:
            return state;
    }
}

export default toDoCompletedReducer;