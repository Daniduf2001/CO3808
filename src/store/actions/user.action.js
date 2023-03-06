import axios from 'axios'
import {ADD_USER, GET_USER} from './actionType';

axios.defaults.baseURL = 'http://localhost:8000/api/';

export function saveUser(user) {
    return function (dispatch) {
        return axios.post('user', user).then((res) => {
            return dispatch({
                type: ADD_USER,
                payload: res
            })
        })
    }
}

export function getUser() {
    return function (dispatch) {
        axios.get(`user/all`).then((res) => {
            dispatch({
                type: GET_USER, payload: res
            })
        }).catch((err) => {
            dispatch({
                type: GET_USER, payload: err
            })
        });
    }
}
