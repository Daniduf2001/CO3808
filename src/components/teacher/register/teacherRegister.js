import React, {useEffect, useState} from 'react';
import './teacherRegister.css'
import teacherImg from '../../../assets/images/teacherBackground.png'
import Cookies from "universal-cookie";
import UserInfo from "../../../Library/UserInfo";
import Axios from "axios";

const URL = process.env.REACT_APP_BACKEND_URL;
function TeacherRegister() {

    const [userInfo, setUserInfo] = useState('');
    const [classes, setClasses] = useState([]);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [fieldOfExpertise, setFieldOfExpertise] = useState('');

    useEffect(() => {
        const token = new Cookies().get('token');
        UserInfo(token).then((res) => {
            console.log(res)
            if (res) setUserInfo(res); else window.location = "/login"
        })
    }, [])

    const updateTeacherDetails = (e) => {
        e.preventDefault();
        const updateTeacherDetails = {
            "userType": "teacher",
            "name": name,
            "mobile": mobile,
            "fieldOfExpertise": fieldOfExpertise,
            "education": userInfo.education,
            "_id": userInfo._id,
            "username": userInfo.username,
            "email": userInfo.email,
            "token": userInfo.token
        }

        Axios.post(`${URL}/users/update/by/${userInfo._id}`, updateTeacherDetails)
            .then((res) => {
                console.log(res.data);
                const token = new Cookies();
                token.set('token', res.data.token, {path: '/', maxAge: 604800})
                //return to home page
                window.location = "/login";
            }).catch(err => console.log(err.response))
    }


    return (
        <div className="h-100 container-fluid teacherFormDiv">
            <div className="h-100">
                <div
                    className="col-lg-12 col-sm-12 col-md-12 col-12 d-flex justify-content-start align-items-center pb-2"
                    style={{borderBottom: "2px solid #eee"}}>
                    <div className="circleDiv"/>
                    <div className="circleDiv"/>
                    <div className="circleDiv"/>
                    <h4 className="m-0 ms-4 fw-bold text-white mt-2">LearnNow</h4>
                </div>
                <div className="p-0 m-0">
                    <div className="col-lg-6 col-sm-12 col-md-12 col-12  p-0 m-0 d-flex
                        flex-column justify-content-center align-items-center">
                        <img src={teacherImg} alt="teacher" style={{marginTop: "150px"}}/>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-12 col-12  mt-4">
                        <div className="col-lg-8 text-white">
                            <h2 className="fw-bold text-center">Teacher Registration</h2>
                            <h5 className="text-center mb-3">Fill in your details below</h5>
                            <form onSubmit={updateTeacherDetails}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label text-uppercase">Name</label>
                                    <input type="text" className="form-control" id="name" onChange={
                                        (e) => {
                                            setName(e.target.value)
                                        }
                                    }/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label text-uppercase">Mobile</label>
                                    <input type="text" className="form-control" id="mobile" onChange={
                                        (e) => {
                                            setMobile(e.target.value)
                                        }
                                    }/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-uppercase">Email Address</label>
                                    <input type="email" className="form-control" id="email" value={userInfo.email}
                                           disabled readOnly/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="institute" className="form-label text-uppercase">Field of
                                        expertise</label>
                                    <input type="text" className="form-control" id="institute" onChange={
                                        (e) => {
                                            setFieldOfExpertise(e.target.value)
                                        }
                                    }/>
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