import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/";

export function addTeacher(teacher) {
    return function (dispatch) {
        return axios.post("teacher", teacher).then((res) => {
            return dispatch({
                type: "ADD_TEACHER",
                payload: res,
            });
        });
    }
}