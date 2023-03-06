import {ADD_STUDENT, DELETE_STUDENT, GET_ALL_STUDENTS, GET_STUDENT, UPDATE_STUDENT,} from '../actions/actionType';

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
    error: null,
    loading: false,
};

// user reducer
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload.data],
                loading: false,
            }
        case GET_STUDENT:
            return {
                ...state,
                students: action.payload.data,
            }
        case GET_ALL_STUDENTS:
            return {
                ...state,
                students: action.payload.data,
            }
        case UPDATE_STUDENT:
            return {
                ...state,
                students: action.payload.data,
            }
        case DELETE_STUDENT:
            return {
                ...state,
                students: action.payload.data,
            }
        default:
            return state;
    }
}