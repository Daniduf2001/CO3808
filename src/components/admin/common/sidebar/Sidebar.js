import React, {useEffect, useState} from 'react';
import './sidebar.css';
import {Link, useHistory} from "react-router-dom";
import Cookies from "universal-cookie";
import UserInfo from "../../../../helpers/UserInfo";
import Axios from "axios";

const Sidebar = () => {
    const navigate = useHistory();

    const [userInfo, setUserInfo] = useState('');
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const token = new Cookies().get('token');
        UserInfo(token).then((res) => {
            if (res) {
                setUserInfo(res);
            } else {
                navigate.push('/')
            }
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
            .then(() => navigate.push('/'))
    }

    return (<div className="sidebar">
        <ul>
            <li><Link to="/teacherAdmin/">
                <span className="icon"><i className="fa fa-tachometer" aria-hidden="true"/></span>
                <span className="title">Dashboard</span>
            </Link></li>
            {/*<li><Link to="/teacherAdmin/class/classwork/">*/}
            {/*    <span className="icon"><i className="fa-solid fa-book" aria-hidden="true"></i></span>*/}
            {/*    <span className="title">Class Work</span>*/}
            {/*</Link></li>*/}
            {/*<li><Link to="/teacherAdmin/assignment">*/}
            {/*    <span className="icon"><i className="fa-solid fa-pen-to-square"></i></span>*/}
            {/*    <span className="title">People</span>*/}
            {/*</Link></li>*/}
            {/*<li><Link to="/teacherAdmin/timeTable">*/}
            {/*    <span className="icon"><i className="fa-solid fa-calendar-days"></i></span>*/}
            {/*    <span className="title">Settings</span>*/}
            {/*</Link></li>*/}
        </ul>
    </div>);
}

export default Sidebar;