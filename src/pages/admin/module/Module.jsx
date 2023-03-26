import React from "react";
import './module.css';
import axios from "axios";
import VueSweetalert2 from "sweetalert2";
import {useLocation} from "react-router-dom";

function Module(props) {
    let location = useLocation();
    const userDetails = location.state.state.user;

    function addModel(e) {
        e.preventDefault();
        axios.post('http://localhost:8080/api/v1/module', {
            TeacherID: userDetails._id,
            moduleName: e.target.moduleName.value,
            moduleContent: e.target.moduleContent.value
        }).then((response) => {
            if (response.status === 200) {
                VueSweetalert2.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    icon: 'success',
                    title: response.data.message
                });
            } else {
                VueSweetalert2.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    icon: 'success',
                    title: response.data.message
                });
            }
        }).catch((error) => {
            VueSweetalert2.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'error',
                title: error
            });
        });
    }

    return (<div className="main_container">
        <div className="item">
            <div className="col-lg-12">
                <div className="row d-flex justify-content-center align-item-center">
                    <form id="labForm" onSubmit={addModel}>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <label htmlFor="moduleName fw-bold">Module Name</label>
                                <input type="text" name="moduleName" id="moduleName"
                                       className="form-control" aria-label="role"/>
                                <small
                                    htmlFor="moduleName"
                                    className="d-block text-danger form-text invalid-feedback"
                                ></small>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <label htmlFor="moduleContent fw-bold">drag and drop module content</label>
                                <input type="file" name="moduleName" id="moduleName"
                                       className="form-control" aria-label="role"/>
                                <small
                                    htmlFor="moduleContent"
                                    className="d-block text-danger form-text invalid-feedback"
                                ></small>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <button className="btn btn-primary col-12" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>);
}

export default Module;