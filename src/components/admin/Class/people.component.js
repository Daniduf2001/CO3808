import Axios from "axios";
import React, {useEffect, useState} from "react";
import InfoById from "../../../helpers/InfoById";
import ClassNavbar from "../Navbar/class.navbar";
import DefaultProfile from "../../../Icons/profile.png";
import {useHistory, useLocation} from "react-router-dom";

const URL = process.env.REACT_APP_BACKEND_URL;
const People = (params) => {
    let location = useLocation();
    const classID = location.state.state.classID;
    console.log(classID);
    const navigate = useHistory();

    const [classInfo, setClassInfo] = useState({});
    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        Axios.get(`${URL}/class/get/class/${classID}`)
            .then(res => setClassInfo(() => res.data))
    }, [classID])

    useEffect(() => {
        if (classInfo) {
            InfoById(classInfo.owner)
                .then(result => {
                    setTeachers(teachers => [...teachers, result]);
                });
            if (classInfo.teacher) {
                (classInfo.teacher).forEach(teacher => {
                    InfoById(teacher)
                        .then(result => {
                            setTeachers(teachers => [...teachers, result])
                        })
                })
            }
            if (classInfo.students) {
                (classInfo.students).forEach(student => {
                    InfoById(student)
                        .then(result => setStudents(students => [...students, result]))
                })
            }
        }
    }, [classInfo])

    return (
        <div className="main_container">
            <div className="item">
                <div className="container-fluid">
                    <ClassNavbar classInfo={classInfo}/>
                    <div className="container" style={{width: "50%"}}>
                        <h1 className="box-title">Teachers:</h1>
                        {teachers.map(teacher => {
                            if (teacher) {
                                if (teacher.profile_picture) {
                                    return <div key={teacher._id} className="box">
                                        <img src={`${URL}/${teacher.profile_picture.filename}`} className="pp"
                                             alt={teacher.username}/>
                                        <b>&nbsp;{teacher.username}</b> <span>({teacher.email})</span>
                                    </div>
                                } else {
                                    return <div key={teacher._id} className="box">
                                        <img src={DefaultProfile} className="pp" alt={teacher.username}/>
                                        <b>&nbsp;{teacher.username}</b> <span>({teacher.email})</span>
                                    </div>
                                }
                            } else return null;
                        })}
                        <h1 className="box-title">Students:</h1>
                        {students.map(student => {
                            if (student) {
                                if (student.profile_picture) {
                                    return <div key={student._id} className="box">
                                        <img src={`${URL}/${student.profile_picture.filename}`} className="pp"
                                             alt={student.username}/>
                                        <b>&nbsp;{student.username}</b> <span>({student.email})</span>
                                    </div>
                                } else {
                                    return <div key={student._id} className="box">
                                        <img src={DefaultProfile} className="pp" alt={student.username}/>
                                        <b>&nbsp;{student.username}</b> <span>({student.email})</span>
                                    </div>
                                }
                            } else return null;
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default People;