import React, {useEffect, useState} from 'react';
import './classpage.css';
import {useHistory, useLocation} from "react-router-dom";
import Axios from "axios";
import ClassNavbar from '../../../components/admin/common/navbar/class.navbar';
import InfoById from '../../../helpers/InfoById';
import DefaultProfile from '../../../Icons/profile.png';

const URL = process.env.REACT_APP_BACKEND_URL;

Object.size = function (obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

const ClassPage = (params) => {
    const navigate = useHistory();
    let location = useLocation();
    const classID = location.state.state.classID;
    console.log(classID);

    const [classInfo, setClassInfo] = useState({});
    const [classworks, setClassworks] = useState([]);
    const [authorInfo, setAuthorInfo] = useState({});

    const getClassByID = () => {
        Axios.get(`${URL}/class/get/class/${classID}`).then((res) =>
            setClassInfo(() => res.data)
        );
    }

    const getClassInfoByInfoID = () => {
        if (classInfo._id) {
            Axios.get(`${URL}/classwork/class/get/${classInfo._id}`).then((res) =>
                setClassworks(res.data)
            );
        }
    }

    const getClassWorkInfo = () => {
        if (classworks.length > 0) {
            classworks.forEach((classwork) => {
                InfoById(classwork.author).then((result) =>
                    setAuthorInfo((prev) => ({...prev, [classwork.author]: result}))
                );
            });
        }
    }

    useEffect(() => {
        document.title = classInfo.title;
        getClassByID();
        getClassInfoByInfoID();
        getClassWorkInfo();
    }, []);


    return (
        <div className="main_container">
            <div className="item">
                <div className="container-fluid">
                    <ClassNavbar classInfo={classInfo}/>
                    <div className="margin-top-bottom box box-shadow">
                        <h1 className="box-title">{classInfo.title}</h1>
                        <p className="box-text classinfo-description">
                            {classInfo.description}
                        </p>
                        <h4>Class code: {classInfo.code}</h4>
                    </div>
                    {Object.size(authorInfo) > 0
                        ? classworks.map((classwork) => {
                            if (authorInfo[classwork.author]) {
                                return (
                                    <div
                                        className="margin-top-bottom box box-shadow classwork"
                                        key={classwork._id}
                                        onClick={() => {
                                            if (classwork.types === 'material') {
                                                navigate.push('/teacherAdmin/m/', {
                                                    state: {
                                                        classID: classInfo._id, materialId: classwork._id
                                                    }
                                                })
                                            } else if (classwork.types === 'short answer') {
                                                navigate.push('/teacherAdmin/sa/', {
                                                    state: {
                                                        classID: classInfo._id, materialId: classwork._id
                                                    }
                                                })
                                            } else if (classwork.types === 'long answer') {
                                                navigate.push('/teacherAdmin/la/', {
                                                    state: {
                                                        classID: classInfo._id, materialId: classwork._id
                                                    }
                                                })
                                            } else if (classwork.types === 'multiple choice') {
                                                navigate.push('/teacherAdmin/mc/', {
                                                    state: {
                                                        classID: classInfo._id, materialId: classwork._id
                                                    }
                                                })
                                            } else if (classwork.types === 'checkbox') {
                                                navigate.push('/teacherAdmin/c/', {
                                                    state: {
                                                        classID: classInfo._id, materialId: classwork._id
                                                    }
                                                })
                                            }
                                        }}
                                    >
                                        <h3 className="classwork-title">
                                            {authorInfo[classwork.author].profile_picture ? (
                                                <img
                                                    src={`${URL}/${
                                                        authorInfo[classwork.author].profile_picture
                                                            .filename
                                                    }`}
                                                    alt="Author"
                                                    className="pp"
                                                />
                                            ) : (
                                                <img src={DefaultProfile} alt="Author" className="pp"/>
                                            )}
                                            &nbsp;{authorInfo[classwork.author].username} posted a new{' '}
                                            {classwork.types === 'material' ? (
                                                <span>material</span>
                                            ) : (
                                                <span>Assignment</span>
                                            )}
                                            : &nbsp;{classwork.title}
                                        </h3>
                                        <p>{classwork.description}</p>
                                    </div>
                                );
                            } else return null;
                        })
                        : null}
                </div>
            </div>
        </div>
    );
};

export default ClassPage;
