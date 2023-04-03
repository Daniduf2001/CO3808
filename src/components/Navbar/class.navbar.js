import Axios from "axios";
import React, {useEffect, useState} from "react";
import Cookies from "universal-cookie";
import UserInfo from "../../Library/UserInfo";
import {Link, NavLink} from "react-router-dom"
import '../admin/common/header/header.css'

const URL = process.env.REACT_APP_BACKEND_URL;

const ClassNavbar = ({classInfo}) => {
    const [userInfo, setUserInfo] = useState('');
    const [classes, setClasses] = useState([]);
    const [Profile, setProfile] = useState(null);

    useEffect(() => {
        const token = new Cookies().get('token');
        UserInfo(token).then(result => {
            if (!result) window.location = "/"
            setUserInfo(result);
            if (result.profile_picture) setProfile(`${URL}/${result.profile_picture.filename}`)
        });
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
    }, [])

    const openNav = () => document.getElementById("sidenav").style.width = "250px";

    const CloseNav = () => document.getElementById("sidenav").style.width = "0px";

    return (
        <nav>
            <div className="wrapper">

                <div className="sidebar">
                    <ul>
                        <li><Link to="/adminTeacher">
                            <span className="icon"><i className="fa fa-tachometer" aria-hidden="true"/></span>
                            <span className="title">Dashboard</span>
                        </Link></li>
                        <li><Link to="/">
                            <span className="icon"><i className="fa-solid fa-book" aria-hidden="true"/></span>
                            <span className="title">Classes</span>
                        </Link></li>
                        <li><Link to={`/class/${classInfo._id}/classwork`}>
                            <span className="icon"><i className="fa-solid fa-book" aria-hidden="true"></i></span>
                            <span className="title">Module materials</span>
                        </Link></li>
                        <li><Link to={`/class/${classInfo._id}/classwork`}>
                            <span className="icon"><i className="fa-solid fa-pen-to-square"></i></span>
                            <span className="title">Assignment</span>
                        </Link></li>
                        <li><Link to="/adminTeacher/timeTable">
                            <span className="icon"><i className="fa-solid fa-calendar-days"></i></span>
                            <span className="title">Class time table</span>
                        </Link></li>
                    </ul>
                </div>


                <div className="top_navbar">
                    <div className="hamburger">
                        <div className="one"/>
                        <div className="two"/>
                        <div className="three"/>
                    </div>
                    <div className="col-12 top_menu">
                        <div className="col-6 d-flex justify-content-center">
                            <h1 className="fw-bold">LearnNow</h1>
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            {Object.keys(classInfo).length > 0 && classInfo.owner === userInfo._id ?
                                <nav className="center text-dark topnav">
                                    <p className="col-3 option nav-ham"><NavLink to={`/class/${classInfo._id}`}
                                                                                 className=" link">Stream</NavLink></p>
                                    <p className="col-3 option nav-ham"><NavLink
                                        to={`/class/${classInfo._id}/classwork`}
                                        className="link">Classwork</NavLink></p>
                                    <p className="col-3 option nav-ham"><NavLink to={`/class/${classInfo._id}/people`}
                                                                                 className="link">People</NavLink></p>
                                    <p className="col-3 option nav-ham"><NavLink to={`/class/${classInfo._id}/setting`}
                                                                                 className="link">Setting</NavLink></p>
                                </nav>
                                : <nav className="center text-dark topnav">
                                    <p className="col-4 nav-ham optc"><NavLink to={`/class/${classInfo._id}`}
                                                                               className=" link">Stream</NavLink></p>
                                    <p className="col-4 nav-ham optc"><NavLink to={`/class/${classInfo._id}/classwork`}
                                                                               className="link">Classwork</NavLink></p>
                                    <p className="col-4 nav-ham optc"><NavLink to={`/class/${classInfo._id}/people`}
                                                                               className="link">People</NavLink></p>
                                </nav>}

                            {Profile === null
                                ? <p className="col-3 nav-ham optc d-flex justify-content-end me-3"><NavLink
                                    to="/profile">
                                    <i className="fas fa-user"/>
                                </NavLink></p>
                                : <img src={Profile} alt="Profile Logo" className="nav-right pp nav-ham"
                                       onClick={() => window.location = "/profile"}></img>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default ClassNavbar;