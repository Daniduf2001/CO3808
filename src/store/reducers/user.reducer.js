import {ADD_USER} from '../actions/actionType';

const initialState = {
    users: [],
    user: {},
    error: null,
    loading: false,
};

// user reducer
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload.data],
                loading: false
            }
        default:
            return state;
    }
}