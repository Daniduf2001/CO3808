import React from 'react';
import './teacherRegister.css'
import teacherImg from './../../../assets/images/teacherBackground.png'

function TeacherRegister() {
    return (
        <div className="h-100 container-fluid teacherFormDiv">
            <div className="row h-100">
                <div className="col-lg-12 col-sm-12 col-md-12 col-12 d-flex justify-content-start align-items-center">
                    <div className="circleDiv"/>
                    <div className="circleDiv"/>
                    <div className="circleDiv"/>
                    <h4 className="m-0 ms-4 fw-bold text-white">LearnNow</h4>
                </div>
                <div className="row p-0 m-0">
                    <div
                        className="col-lg-6 col-sm-12 col-md-12 col-12  p-0 m-0 d-flex flex-column justify-content-center align-items-center">
                        <img src={teacherImg} alt="teacher"/>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-12 col-12 ">
                        <div className="col-lg-8 text-white">
                            <h2 className="fw-bold text-center">Teacher Registration</h2>
                            <h5 className="text-center mb-3">Fill in your details below</h5>
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label text-uppercase">Name</label>
                                    <input type="text" className="form-control" id="name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label text-uppercase">Mobile</label>
                                    <input type="text" className="form-control" id="mobile"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-uppercase">Email Address</label>
                                    <input type="email" className="form-control" id="email"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="institute" className="form-label text-uppercase">Field of expertise</label>
                                    <input type="text" className="form-control" id="institute"/>
                                </div>
                                <div className="mb-3 d-flex justify-content-center align-items-center">
                                    <button type="submit" className="btn btn-student-register col-5">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherRegister;