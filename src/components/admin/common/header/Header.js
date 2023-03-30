import React, {useEffect, useState} from "react";
import Cookies from "universal-cookie";
import './header.css';
// import logo from '../../../../assets/logo/logo.svg';
import {Link, useHistory, useLocation} from "react-router-dom";
import UserInfo from "../../../../helpers/UserInfo";
import Axios from "axios";
import InfoById from "../../../../helpers/InfoById";

const Header = () => {

    let location = useLocation();
    const navigate = useHistory();

    const [ClassInfo, setClassInfo] = useState({});
    const [userInfo, setUserInfo] = useState(null);
    const [classworks, setClassworks] = useState([]);
    const [authorInfo, setAuthorInfo] = useState({});

    useEffect(() => {
        const token = new Cookies().get('token');
        UserInfo(token).then(result => {
            if (result) setUserInfo(result); else window.location = "/login"
        })
    }, [])

    useEffect(() => {
        Axios.get(`${URL}/class/get/class/${ClassInfo._id}`)
            .then(res => setClassInfo(() => res.data))
    }, [ClassInfo._id])

    useEffect(() => {
        Axios.get(`${URL}/classwork/class/get/${ClassInfo._id}`)
            .then(res => setClassworks(res.data))
    }, [ClassInfo._id])

    useEffect(() => {
        if (classworks.length > 0) {
            classworks.forEach(classwork => {
                InfoById(classwork.author)
                    .then(result => setAuthorInfo(prev => ({...prev, [classwork.author]: result})))
            })
        }
    }, [classworks])

    const logout = () => {
        const token = new Cookies()
        token.remove('token');
        window.location = "/";
    }

    return (
        <div className="top_navbar">
            <div className="hamburger">
                <div className="one"/>
                <div className="two"/>
                <div className="three"/>
            </div>
            <div className="col-12 top_menu">
                <div className="col-7  d-flex justify-content-end">
                    <span className="nav-right nav-ham" onClick={() => {
                        navigate.push(`/teacherAdmin/join/`, {state: {classID: ClassInfo._id}})
                        window.location = "/teacherAdmin/join/"
                    }}>+</span>
                </div>
                <div className="col-5 d-flex justify-content-end">
                    <ul className="mb-0">
                        <li className="mt-1 text-decoration-none">
                            <p style={{cursor: "pointer"}} className="d-inline me-2" onClick={logout}><i
                                className="fa fa-sign-out logoutIcon"
                                aria-hidden="true"/></p>
                        </li>
                        <li>
                            <Link to="/teacherAdmin/profile/">
                                <i className="fas fa-user"/>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Header;