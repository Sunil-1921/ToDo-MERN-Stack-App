import { ADD_TODO, SET_TODO } from "../actions"

const toDoReducer = (state = [], action) => {
    console.log("action payload=", action.payload)
    switch (action.type) {
        case ADD_TODO:
            return [...state, { id: new Date().getTime(), heading: action.payload.heading, description: action.payload.description }];
        case SET_TODO:
            return [...action?.payload];
        default:
            return state;
    }
}

export default toDoReducer;