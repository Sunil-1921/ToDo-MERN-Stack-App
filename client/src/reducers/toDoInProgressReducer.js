import { ADD_IN_PROGRESS, SET_IN_PROGRESS } from "../actions"

const toDoInProgressReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_IN_PROGRESS:
            return [...state, { id: new Date().getTime(), heading: action.payload.heading, description: action.payload.description }];
        case SET_IN_PROGRESS:
            return [...action?.payload];
        default:
            return state;
    }
}

export default toDoInProgressReducer;