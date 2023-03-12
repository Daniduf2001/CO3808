import {ADD_TEACHER, DELETE_TEACHER, GET_ALL_TEACHERS, GET_TEACHER, UPDATE_TEACHER} from '../actions/actionType';

const initialState = {
    teachers: [],
    teacher: {
        UserID: "",
        TeacherID: "",
        TeacherName: "",
        TeacherMobile: "",
        TeacherEmailAddress: "",
        FieldOfExpertise: "",
    },
    error: null,
    loading: false,
};

// user reducer
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TEACHER:
            return {
                ...state,
                teachers: [...state.teachers, action.payload.data],
                loading: false,
            }
        case GET_TEACHER:
            return {
                ...state,
                teachers: action.payload.data,
            }
        case GET_ALL_TEACHERS:
            return {
                ...state,
                teachers: action.payload.data,
            }
        case UPDATE_TEACHER:
            return {
                ...state,
                teachers: action.payload.data,
            }
        case DELETE_TEACHER:
            return {
                ...state,
                teachers: action.payload.data,
            }
        default:
            return state;
    }
}