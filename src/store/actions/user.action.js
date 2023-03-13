import axios from 'axios'
import {ADD_USER, GET_USER} from './actionType';

axios.defaults.baseURL = 'http://localhost:8000/api/';

export function saveUser(user) {//save user action
    return function (dispatch) {
        return axios.post('user', user).then((res) => {//post user data
            return dispatch({//dispatch action
                type: ADD_USER,
                payload: res
            })
        })
    }
}

export function getUser() {//get user action
    return function (dispatch) {
        axios.get(`user/all`).then((res) => {//get user data
            dispatch({//dispatch action
                type: GET_USER, payload: res
            })
        }).catch((err) => {//catch error
            dispatch({
                type: GET_USER, payload: err
            })
        });
    }
}
