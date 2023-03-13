import {ADD_USER, GET_USER} from '../actions/actionType';

const initialState = {
    users: [],
    user: {
        UserName: "",
        UserEmail: "",
        Password: "",
        DOB: ""
    },
    error: null,
    loading: false,
};

// user reducer
export default function userReducer(state = initialState, action) {
    switch (action.type) {//check action types
        case ADD_USER://check type of user add action
            return {
                ...state,//return current state
                users: [...state.users, action.payload.data],//return users
                loading: false,//set loading to false
            }
        case GET_USER://check type of user get action
            return {
               ...state,//return current state
                users: action.payload.data,//return users
            }
        default://default return state
            return state;//return current state
    }
}