import React from 'react';

const TimeTable = (props) => {
    return (
        <div className="main_container">
            <div className="item">
                <div className="col-lg-12">
                    <div className="row d-flex justify-content-center align-item-center">
                        <form id="labForm">
                            <div className="row">

                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <label htmlFor="moduleName fw-bold">Schedule Class</label>
                                    <select onChange="" name="labID" id="labName"
                                            className="form-select" aria-label="role">
                                        <option selected disabled value="0">AF</option>
                                    </select>
                                    <small
                                        htmlFor="moduleName"
                                        className="d-block text-danger form-text invalid-feedback"
                                    ></small>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <label htmlFor="moduleName fw-bold">Schedule Class Time</label>
                                    <input type="text" name="moduleName" id="moduleName"
                                           className="form-control" aria-label="role"/>
                                    <small
                                        htmlFor="moduleName"
                                        className="d-block text-danger form-text invalid-feedback"
                                    ></small>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <label htmlFor="moduleName fw-bold">Class Duration</label>
                                    <input type="text" name="moduleName" id="moduleName"
                                           className="form-control" aria-label="role"/>
                                    <small
                                        htmlFor="moduleName"
                                        className="d-block text-danger form-text invalid-feedback"
                                    ></small>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <label htmlFor="moduleName fw-bold">Class Materials</label>
                                    <input type="file" name="moduleName" id="moduleName"
                                           className="form-control" aria-label="role"/>
                                    <small
                                        htmlFor="moduleName"
                                        className="d-block text-danger form-text invalid-feedback"
                                    ></small>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 mt-4 d-flex justify-content-center">
                                    <button className="btn btn-primary col-5" type="reset">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeTable;