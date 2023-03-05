import React from 'react';
import './studentRegister.css'
import studentImg from './../../../assets/images/backImg.png'

function StudentRegister() {
    return (
        <div className="h-100 container-fluid studentFormDiv">
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
                        <img src={studentImg} alt="studentImg"/>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-12 col-12 ">
                        <div className="col-lg-8 text-white">
                            <h2 className="fw-bold text-center">Student Registration</h2>
                            <h5 className="text-center mb-3">Fill in your student details below</h5>
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">Mobile</label>
                                    <input type="text" className="form-control" id="mobile"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="institute" className="form-label">Email Address</label>
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

export default StudentRegister;