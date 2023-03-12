import {combineReducers} from 'redux';
import userReducer from "./user.reducer";
import studentReducer from "./student.reducer";
import teacherReducer from "./teacher.reducer";

export default combineReducers({
    userReducer,
    studentReducer,
    teacherReducer
});