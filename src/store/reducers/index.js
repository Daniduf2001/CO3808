import {combineReducers} from 'redux';
import userReducer from "./user.reducer";
import studentReducer from "./student.reducer";
import teacherReducer from "./teacher.reducer";

export default combineReducers({//combine all reducers
    userReducer,//user reducer
    studentReducer,//student reducer
    teacherReducer//teacher reducer
});