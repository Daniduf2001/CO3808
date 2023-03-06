import {combineReducers} from 'redux';
import userReducer from "./user.reducer";
import studentReducer from "./student.reducer";

export default combineReducers({
    userReducer,
    studentReducer
});