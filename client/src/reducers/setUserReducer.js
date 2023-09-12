import { SET_USER } from '../actions';

const setUserReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...action?.payload };
        default:
            return state;
    }
}

export default setUserReducer;