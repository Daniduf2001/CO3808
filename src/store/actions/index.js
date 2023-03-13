import {getUser, saveUser} from './user.action';
import {addStudent} from './student.action';
import {addTeacher} from './teacher.action';

// export all imported actions as actionCreator
export const actionCreator = {//create action creator of combined actions
    saveUser,//save user action
    getUser,//get user action
    addStudent,//addStudent
    addTeacher//addTeacher
}