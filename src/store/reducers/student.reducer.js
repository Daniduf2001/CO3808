import {ADD_STUDENT, DELETE_STUDENT, GET_ALL_STUDENTS, GET_STUDENT, UPDATE_STUDENT,} from '../actions/actionType';

//create initial state
const initialState = {
    students: [],
    student: {
        UserID: "",
        StudentID: "",
        StudentName: "",
        StudentMobile: "",
        StudentEmailAddress: "",
        EducationalInstitute: "",
    },
    error: null,//error
    loading: false,//loading
};

// user reducer
export default function userReducer(state = initialState, action) {
    switch (action.type) {//check action types
        case ADD_STUDENT://check type of student add action
            return {//return current state
                ...state,//return current state
                students: [...state.students, action.payload.data],//return students
                loading: false,//set loading to false
            }
        case GET_STUDENT://check type of student get action
            return {
                ...state,//return current state
                students: action.payload.data,//return students
            }
        case GET_ALL_STUDENTS://check type of students get action
            return {
                ...state,//return current state
                students: action.payload.data,//return students
            }
        case UPDATE_STUDENT://check type of student update action
            return {
                ...state,//return current state
                students: action.payload.data,//return students
            }
        case DELETE_STUDENT://check type of student delete action
            return {//return current state
                ...state,//return current state
                students: action.payload.data,//return students
            }
        default://default return state
            return state;//return current state
    }
}