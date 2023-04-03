import React, {useEffect, useState} from 'react';
import './header.css';
import {Link} from "react-router-dom";
import Cookies from "universal-cookie";
import UserInfo from "../../../../Library/UserInfo";

const Header = () => {
    const [userInfo, setUserInfo] = useState('');
    const [profile, setProfile] = useState(null);
    const [info, setInfo] = useState('');

    useEffect(() => {
        const token = new Cookies().get('token');
        UserInfo(token).then((res) => {
            if (res) setUserInfo(res); else window.location = "/"
        })

        console.log(userInfo)
    }, [])

    useEffect(() => {
        if (userInfo) {
            if (userInfo.profile_picture) setProfile(`${URL}/${userInfo.profile_picture.filename}`)
        }
    }, [userInfo])

    return (
        <div className="top_navbar">
            <div className="hamburger">
                <div className="one"/>
                <div className="two"/>
                <div className="three"/>
            </div>
            <div className="col-12 top_menu">
                <div className="col-6 d-flex justify-content-end">
                    <h1 className="fw-bold">Learn</h1>
                </div>
                <div className="col-5 d-flex justify-content-end">
                    <ul className="mb-0 profileDIv">
                        <li className="mt-1 text-decoration-none">
                            <a className="d-inline me-2 text-dark" style={{background: 'none'}} href="logout"><i
                                className="fa fa-sign-out logoutIcon"
                                aria-hidden="true"/>
                            </a>
                            <p className="d-inline ms-2 me-2 fw-bold profileText">{userInfo.name}</p>
                        </li>
                        <li>
                            <Link to="/adminTeacher/profile">
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