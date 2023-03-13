import React from 'react';
import './teacherRegister.css'
import teacherImg from './../../../assets/images/teacherBackground.png'
import VueSweetalert2 from "sweetalert2";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreator} from "../../../store/actions";
import {useLocation} from "react-router-dom";

function TeacherRegister() {
    const dispatch = useDispatch();C
    const {addTeacher} = bindActionCreators(actionCreator, dispatch);//bind action creator
    let location = useLocation();//get location
    const registeredUser = location.state.user;//get user from location state
    const teacher = useSelector((state) => state.teacherReducer.teacher);//get teacher from teacher reducer

    const teacherRegister = (e) => {//create teacher register function
        e.preventDefault();//prevent default action
        const newTeacher = {//create new teacher object
            UserID: registeredUser._id,
            TeacherName: teacher.TeacherName,
            TeacherMobile: teacher.TeacherMobile,
            TeacherEmailAddress: teacher.TeacherEmailAddress,
            FieldOfExpertise: teacher.FieldOfExpertise,
        }

        if (!(newTeacher.UserID === undefined)) {//check if user id is not undefined
            addTeacher(newTeacher).then((res) => {//add teacher and return response
                if (res.payload.status === 200) {//check return status is 200
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
        document.getElementById("teacherForm").reset();
    }

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
                            <form onSubmit={teacherRegister} id="teacherForm">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label text-uppercase">Name</label>
                                    <input type="text" className="form-control" id="name" onChange={(e) => {
                                        teacher.TeacherName = e.target.value
                                    }}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label text-uppercase">Mobile</label>
                                    <input type="text" className="form-control" id="mobile" onChange={(e) => {
                                        teacher.TeacherMobile = e.target.value
                                    }}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-uppercase">Email Address</label>
                                    <input type="email" className="form-control" id="email" onChange={(e) => {
                                        teacher.TeacherEmailAddress = e.target.value
                                    }}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="expertise" className="form-label text-uppercase">Field of
                                        expertise</label>
                                    <input type="text" className="form-control" id="expertise" onChange={(e) => {
                                        teacher.FieldOfExpertise = e.target.value
                                    }}/>
                                </div>
                                <div className="mb-3 d-flex justify-content-center align-items-center">
                                    <button type="submit" className="btn btn-teacher-register col-5">Register</button>
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