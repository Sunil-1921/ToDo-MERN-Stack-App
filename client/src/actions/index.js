export const ADD_TODO = 'ADD_TODO';
export const ADD_IN_PROGRESS = 'ADD_IN_PROGRESS';
export const ADD_COMPLETED = 'ADD_COMPLETED';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_LOGIN = 'SET_LOGIN';
export const SET_TODO = 'SET_TODO';
export const SET_IN_PROGRESS = 'SET_IN_PROGRESS';
export const SET_COMPLETED = 'SET_COMPLETED';
export const SET_USER = 'SET_USER';

export const addToDo = (data) => {
    return { type: ADD_TODO, payload: data };
}

export const addInProgress = (data) => {
    return { type: ADD_IN_PROGRESS, payload: data };
}

export const addCompleted = (data) => {
    return { type: ADD_COMPLETED, payload: data };
}

// export const setToken = (token) => {
//     return { type: SET_TOKEN, payload: token };
// }

export const setLogin = (loginStatus) => {
    return { type: SET_LOGIN, payload: loginStatus };
}

export const setTodo = (data) => {
    return { type: SET_TODO, payload: data };
}

export const setInProgress = (data) => {
    return { type: SET_IN_PROGRESS, payload: data }
}

export const setCompleted = (data) => {
    return { type: SET_COMPLETED, payload: data }
}

export const setUser = (data) => {
    return { type: SET_USER, payload: data };
}