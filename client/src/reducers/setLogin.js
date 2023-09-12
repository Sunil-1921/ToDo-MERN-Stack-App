// import { SET_TOKEN } from "../actions";

// const setTokenReducer = (state = "", action) => {
//     switch (action.type) {
//         case SET_TOKEN:
//             return state = action.payload;
//         default:
//             return state;
//     }
// }

// export default setTokenReducer;

import { SET_LOGIN } from "../actions";

const setLoginReducer = (state = false, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return state = action.payload;
        default:
            return state;
    }
}

export default setLoginReducer;