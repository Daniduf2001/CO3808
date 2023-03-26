import React, {useEffect, useState} from "react";
import './dashboard.css';
import CountCard from "../../../components/admin/countCard/CountCard";
import UserInfo from "./../../../helpers/UserInfo";
import Cookies from "universal-cookie";
import Axios from "axios";

const URL = process.env.REACT_APP_BACKEND_URL;

const Dashboard = () => {


    const [userInfo, setUserInfo] = useState('');
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const token = new Cookies().get('token');
        UserInfo(token).then((res) => {
            if (res) setUserInfo(res); else window.location = "/teacherAdmin"
        })
    }, [])


    useEffect(() => {
        if (userInfo) {
            Axios.get(`${URL}/class/get/created/${userInfo._id}`)
                .then(res => {
                    res.data.forEach(_class => {
                        setClasses(classes => [...classes, _class])
                    })
                })
            Axios.get(`${URL}/class/get/taught/${userInfo._id}`)
                .then(res => {
                    res.data.forEach(_class => {
                        setClasses(classes => [...classes, _class])
                    })
                })
            Axios.get(`${URL}/class/get/studied/${userInfo._id}`)
                .then(res => {
                    res.data.forEach(_class => {
                        setClasses(classes => [...classes, _class])
                    })
                })
        }
    }, [userInfo])


    const Archive = (classId, owner) => {
        if (userInfo._id !== owner) {
            Axios.post(`${URL}/class/user/archive`, {_class: classId, student: userInfo._id, token: userInfo.token})
                .then(() => window.location = "/archived")
                .catch(err => console.log(err.response))
        } else {
            if (window.confirm("Are you sure?")) {
                Axios.post(`${URL}/class/archive`, {token: userInfo.token, owner: userInfo._id, _class: classId})
                    .then(() => window.location = "/archived")
            }
        }
    }

    const Unenroll = (classId) => {
        Axios.post(`${URL}/class/students/delete`, {token: userInfo.token, _class: classId, student: userInfo._id})
            .then(() => window.location = "/")
    }


    return (
        <div className="main_container">
            <div className="item">
                <div className="d-flex justify-content-between">
                    <CountCard icon="fas fa-user" title="Total Student" subtitle="100"/>
                    <CountCard icon="fa-solid fa-book" title="Total Modules" subtitle="100"/>
                    <CountCard icon="fa-solid fa-pen-to-square" title="Total Assignment" subtitle="100"/>
                </div>
            </div>
            <div className="item">
                <div className="container-fluid">
                    <div className="container">
                        {classes.map(_class => {
                            if (!_class.archived && !userInfo.archived_class.includes(_class._id)) {
                                return <div className="class box box-shadow" key={_class._id}>
                                    <div onClick={() => window.location = `/class/${_class._id}`}>
                                        <h1 className="box-title">{_class.title}</h1>
                                        <p className="box-text class-description">{_class.description}</p>
                                    </div>
                                    <p className="box-option link"
                                       onClick={() => Archive(_class._id, _class.owner)}>Archive</p>
                                    {_class.students.includes(userInfo._id) ?
                                        <p className="box-option link" onClick={() => Unenroll(_class._id)}>Unenroll</p>
                                        : <p className="box-option link"
                                             onClick={() => window.location = `/class/${_class._id}/setting`}>Setting</p>}
                                </div>
                            } else return null;
                        })}
                    </div>
                </div>
            </div>
            <div className="item">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi
                reprehenderit minima blanditiis eum quae aspernatur!
            </div>
        </div>
    );
};

export default Dashboard;