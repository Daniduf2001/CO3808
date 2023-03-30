import React, {useEffect, useState} from "react";
import UserInfo from "../../../helpers/UserInfo";
import Cookies from "universal-cookie";
import DefaultProfilePicture from "../../../Icons/profile.png";
import Axios from "axios";
import {NavLink} from "react-router-dom";

const URL = process.env.REACT_APP_BACKEND_URL;
const Profile = () => {
    const [userInfo, setUserInfo] = useState('');
    const [profile, setProfile] = useState(null);
    const [info, setInfo] = useState('');

    useEffect(() => {
        const token = new Cookies().get('token');
        UserInfo(token).then((res) => {
            if (res) setUserInfo(res); else window.location = "/"
        })
    }, [])

    useEffect(() => {
        if (userInfo) {
            if (userInfo.profile_picture) setProfile(`${URL}/${userInfo.profile_picture.filename}`)
        }
    }, [userInfo])

    const logout = () => {
        const token = new Cookies()
        token.remove('token');
        window.location = "/";
    }


    const ChangeProfilePicture = (e) => {
        const token = new Cookies().get('token');
        setInfo("Uploading image...");
        const formData = new FormData();
        if (e.target.files[0]) {
            formData.append('myfile', e.target.files[0]);
            formData.append('token', token);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            };
            Axios.post(`${URL}/users/profile_picture`, formData, config)
                .then((res) => {
                    setProfile(`${URL}/${res.data}`);
                    setInfo("");
                })
        }
    }

    return (
        <div className="main_container">
            <div className="item">
                <div className="container-fluid">
                    <div className="container" style={{width: "50%"}}>
                        <div className="margin-top-bottom box box-shadow text-dark">
                            <h1 className="box-title">Your account information:</h1>
                            <h4>{info}</h4>
                            <div className="center">
                                <label htmlFor="upload-profile-picture">
                                    {profile === null
                                        ? <img src={DefaultProfilePicture} className="profile-pp"
                                               alt="Default Profile Logo"
                                               title="Click to change"/>
                                        : <img src={profile} className="profile-pp" alt="Profile Logo"
                                               title="Click to change"/>
                                    }
                                </label>
                                <input type="file" id="upload-profile-picture" accept="image/*"
                                       onChange={ChangeProfilePicture}/>
                            </div>
                            <p className="text-label">Username: {userInfo.username}</p>
                            <p className="text-label">Email: {userInfo.email}</p>
                            <p className="text-label">Password: Your password</p>
                            <div className="d-flex justify-content-around">
                                <h4><NavLink to="/teacherAdmin/UserProfile/edit" style={{paddingLeft: "0"}}
                                             className="btn btn-primary text-white px-4">Edit Profile</NavLink></h4>
                                <h4>
                                    <button type="button" style={{paddingLeft: "0"}} onClick={() => {
                                        logout()
                                    }}
                                            className="btn btn-danger text-white px-4">Logout
                                    </button>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;