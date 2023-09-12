import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './reducers/toDoReducer';
import toDoInProgressReducer from './reducers/toDoInProgressReducer';
import toDoCompletedReducer from './reducers/toDoCompletedReducer';
// import setTokenReducer from './reducers/setTokenReducer';
import setLoginReducer from './reducers/setLogin';
import setUserReducer from './reducers/setUserReducer';

const store = configureStore({
    reducer: {
        toDo: toDoReducer,
        toDoInProgress: toDoInProgressReducer,
        toDoCompleted: toDoCompletedReducer,
        // setToken: setTokenReducer,
        setLogin: setLoginReducer,
        setUser: setUserReducer
    }
});

export default store;