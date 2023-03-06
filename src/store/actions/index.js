import {getUser, saveUser} from './user.action';
import {addStudent} from './student.action';

// export all imported actions as actionCreator
export const actionCreator = {
    saveUser,
    getUser,
    addStudent,
}