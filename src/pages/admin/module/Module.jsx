import React from "react";
import './module.css';

function Module(props) {

    return (<div className="main_container">
        <div className="item">
            <div className="col-lg-12">
                <div className="row d-flex justify-content-center align-item-center">
                    <form id="labForm">
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
                                <button className="btn btn-primary col-12" type="reset">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>);
}

export default Module;