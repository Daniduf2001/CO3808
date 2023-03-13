import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/";

export function addTeacher(teacher) {//add teacher action
    return function (dispatch) {
        return axios.post("teacher", teacher).then((res) => {//post teacher data
            return dispatch({//dispatch action
                type: "ADD_TEACHER",
                payload: res,
            });
        });
    }
}