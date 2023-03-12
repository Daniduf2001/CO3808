import {getUser, saveUser} from './user.action';
import {addStudent} from './student.action';
import {addTeacher} from './teacher.action';

// export all imported actions as actionCreator
export const actionCreator = {
    saveUser,
    getUser,
    addStudent,
    addTeacher
}