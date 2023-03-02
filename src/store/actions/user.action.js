import axios from 'axios'
import {GET_USER} from './actionType';

const ROOT_URL = 'http://localhost:8000/api/';

export function saveUser(user) {
    axios.post(`${ROOT_URL}user`, user).then((res) => {
        console.log(res);
    })
    // return {
    //     type: ADD_USER,
    //     payload: request
    // }
}

export function getUser() {
    return function (dispatch) {
        axios.get(`${ROOT_URL}user/all`).then((res) => {
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
