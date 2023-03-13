import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/";

export function addStudent(student) {//add student action
    return function (dispatch) {
        return axios.post("student", student).then((res) => {//post student data
            return dispatch({//dispatch action
                type: "ADD_STUDENT",
                payload: res,
            });
        });
    }
}