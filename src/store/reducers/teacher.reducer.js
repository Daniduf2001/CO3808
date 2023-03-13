import {ADD_TEACHER, DELETE_TEACHER, GET_ALL_TEACHERS, GET_TEACHER, UPDATE_TEACHER} from '../actions/actionType';

//create initial state
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
    switch (action.type) {//check action types
        case ADD_TEACHER://check type of teacher add action
            return {
                ...state,//return current state
                teachers: [...state.teachers, action.payload.data],//return teachers
                loading: false,//set loading to false
            }
        case GET_TEACHER://check type of teacher get action
            return {//return current state
                ...state,//return current state
                teachers: action.payload.data,//return teachers
            }
        case GET_ALL_TEACHERS://check type of teachers get action
            return {//return current state
                ...state,//return current state
                teachers: action.payload.data,//return teachers
            }
        case UPDATE_TEACHER://check type of teacher update action
            return {//return current state
                ...state,//return current state
                teachers: action.payload.data,//return teachers
            }
        case DELETE_TEACHER://check type of teacher delete action
            return {//return current state
                ...state,//return current state
                teachers: action.payload.data,//return teachers
            }
        default://default return state
            return state;//return current state
    }
}