import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/";

export function addStudent(student) {
    return function (dispatch) {
        return axios.post("student", student).then((res) => {
            return dispatch({
                type: "ADD_STUDENT",
                payload: res,
            });
        });
    }
}