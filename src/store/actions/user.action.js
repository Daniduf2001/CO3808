import axios from 'axios'
import {ADD_USER} from './actionType';

const ROOT_URL = 'http://localhost:8000/api/';

export function saveUser(user) {
    const request = axios.post(`${ROOT_URL}user`, user);
    return {
        type: ADD_USER,
        payload: request
    }
}
