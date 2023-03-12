import React from 'react';
import './studentRegister.css'
import studentImg from './../../../assets/images/backImg.png'
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreator} from "../../../store/actions";
import VueSweetalert2 from "sweetalert2";


const StudentRegister = () => {
    const dispatch = useDispatch();
    const {addStudent} = bindActionCreators(actionCreator, dispatch);
    const student = useSelector((state) => state.studentReducer.student);
    let location = useLocation();
    const registeredUser = location.state.user;
    student.StudentEmailAddress = registeredUser.UserEmail
    student.StudentName = registeredUser.UserName

    const studentRegister = (e) => {
        e.preventDefault();
        const newStudent = {
            UserID: registeredUser._id,
            StudentName: student.StudentName,
            StudentMobile: student.StudentMobile,
            StudentEmailAddress: student.StudentEmailAddress,
            EducationalInstitute: student.EducationalInstitute,
        }

        if (!(newStudent.UserID === undefined)) {
            addStudent(newStudent).then((res) => {
                if (res.payload.status === 200) {
                    VueSweetalert2.fire({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        icon: 'success',
                        title: res.payload.data.message
                    });

                    clearTextFields();
                }
            }).catch((err) => {
                VueSweetalert2.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    icon: 'error',
                    title: err.response.data.message
                });
            });
        } else {
            VueSweetalert2.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'error',
                title: "Please Register as a User First"
            });
        }
    }

    const clearTextFields = () => {
        document.getElementById("studentForm").reset();
    }


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
                            <form onSubmit={studentRegister} id="studentForm">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label text-uppercase">Name</label>
                                    <input type="text" className="form-control" id="name"
                                           onChange={(e) => {
                                               student.StudentName = e.target.value
                                           }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label text-uppercase">Mobile</label>
                                    <input type="text" className="form-control" id="mobile"
                                           onChange={(e) => {
                                               student.StudentMobile = e.target.value
                                           }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-uppercase">Email Address</label>
                                    <input type="email" className="form-control" id="email"
                                           onChange={(e) => {
                                               student.StudentEmailAddress = e.target.value
                                           }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="institute" className="form-label text-uppercase">Educational
                                        Institute</label>
                                    <input type="text" className="form-control" id="institute" onChange={(e) => {
                                        student.EducationalInstitute = e.target.value
                                    }}/>
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