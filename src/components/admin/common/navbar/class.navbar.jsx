import Axios from "axios";
import React, {useEffect, useState} from "react";
import Cookies from "universal-cookie";
import '../../../../assets/global/style.css';
import '../../../../assets/global/HurlUI.css';
import UserInfo from "../../../../helpers/UserInfo";
import {Link, useHistory} from "react-router-dom"

const URL = process.env.REACT_APP_BACKEND_URL;

const ClassNavbar = ({classInfo}) => {
    const navigate = useHistory();
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
    }, [userInfo])

    // const openNav = () => document.getElementById("sidenav").style.width = "250px";

    // const CloseNav = () => document.getElementById("sidenav").style.width = "0px";

    return (<nav>
        {Object.keys(classInfo).length > 0 && classInfo.owner === userInfo._id ?
            <nav className="center bg-white text-dark topnav">
                <p className="col-3 option nav-ham mt-2 mb-2">
                    <Link to={`/teacherAdmin/`} className=" link">Stream</Link>
                </p>
                <p className="col-3 option nav-ham mt-2 mb-2">
                    <p onClick={() => {
                        navigate.push(`/teacherAdmin/classwork/`, {state: {classID: classInfo._id}})
                    }} className="link">Classwork</p>
                </p>
                <p className="col-3 option nav-ham mt-2 mb-2"><p
                    onClick={
                        () => {
                            navigate.push(`/teacherAdmin/people/`, {state: {classID: classInfo._id}})
                        }
                    }
                    className="link">People</p></p>
                <p className="col-3 option nav-ham mt-2 mb-2"><p
                    onClick={
                        () => {
                            navigate.push(`/teacherAdmin/setting/`, {state: {classID: classInfo._id}})
                        }
                    }
                    className="link">Setting</p></p>
            </nav> : <nav className="center bg-white text-dark topnav">
                <p className="col-3 option nav-ham mt-2 mb-2">
                    <Link to={`/teacherAdmin/`} className=" link">Stream</Link>
                </p>
                <p className="col-3 option nav-ham mt-2 mb-2">
                    <p onClick={() => {
                        navigate.push(`/teacherAdmin/classwork/`, {state: {classID: classInfo._id}})
                    }} className="link">Classwork</p>
                </p>
                <p className="col-3 option nav-ham mt-2 mb-2"><p
                    onClick={
                        () => {
                            navigate.push(`/teacherAdmin/people/`, {state: {classID: classInfo._id}})
                        }
                    }
                    className="link">People</p></p>
            </nav>}
    </nav>)
}

export default ClassNavbar;