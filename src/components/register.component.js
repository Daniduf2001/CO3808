import Axios from "axios";
import React, {useEffect, useState} from "react";
import Cookies from "universal-cookie";
import {NavLink} from "react-router-dom";

const URL = process.env.REACT_APP_BACKEND_URL;
const Register = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputPasswordConfirmation, setInputPasswordConfirmation] = useState('');
    const [inputUsername, setInputUsername] = useState('');
    const [error, setError] = useState([]);

    //Register the user
    const Submit = async (e) => {
        e.preventDefault();

        if (error === "") {
            await Axios.post(`${URL}/users/register`, {
                email: inputEmail,
                username: inputUsername,
                password: inputPassword
            })
                .then(res => {
                    const token = new Cookies();
                    token.set('token', res.data.token, {path: '/', maxAge: 604800})
                    //return to home page
                    window.location = "/welcome";
                })
                .catch(err => setError(err.response.data.message));
        }
    }

    useEffect(() => {
        if (inputEmail.length > 0) setError('');
    }, [inputEmail])

    //validating users' input
    useEffect(() => {
        if (inputPassword !== inputPasswordConfirmation) setError("Password and confirmation must match.")
        else {
            if (inputUsername.length < 3 && inputUsername.length !== 0) setError("Username length should be more than or equal to three");
            else if (inputUsername.length > 50) setError('Username length should be less or equal to 50');
            else setError('');
        }
    }, [inputPassword, inputPasswordConfirmation, inputUsername])

    return (
        <div className="text-white px-0 m-0 loginDiv">
            <div className="col-lg-6">
                <div className="col-lg-12 mt-5 ps-5 pt-3">
                    <div className="col-12 mb-3">
                        <h4 className="fw-bold"> LearnNow</h4>
                    </div>
                    <div className="col-12">
                        <h1 className="fw-bold">Create a</h1>
                        <h1 className="fw-bold">New Account</h1>
                    </div>
                    <div className="col-12 mt-3 mb-5">
                        <h6 className="d-inline-block fw-bold">Already Registered? &nbsp;</h6>
                        <NavLink className="d-inline-block fw-bold text-white" to="/"> Login </NavLink>
                        <div className="lineBrake pl-0 mt-3"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-12 pl-0">
                        <div className="col-12 mt-5">
                            <p>
                                Sign up and start your e-learning journey today!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 text-white">
                <div
                    className="mt-4 d-flex flex-column justify-content-center align-items-center signInSDiv text-white">
                    <div className="text-center mb-2 pt-4">
                        <h1 className="fw-bold">Sign Up</h1>
                    </div>
                    <div className="px-4 pb-5">
                        <form className="margin text-dark" onSubmit={Submit}>
                            <h4 className="form-error">{error}</h4>
                            <div className="form-group">
                                <p className="form-label text-light">Username:</p>
                                <input type="text" className="form-control" value={inputUsername}
                                       onChange={({target: {value}}) => setInputUsername(value)}/>
                            </div>
                            <div className="form-group">
                                <p className="form-label text-light">Email:</p>
                                <input type="email" className="form-control" value={inputEmail}
                                       onChange={({target: {value}}) => setInputEmail(value)}/>
                            </div>
                            <div className="form-group">
                                <p className="form-label text-light">Password:</p>
                                <input type="password" className="form-control" value={inputPassword}
                                       onChange={({target: {value}}) => setInputPassword(value)}/>
                            </div>
                            <div className="form-group">
                                <p className="form-label text-light">Password Confirmation:</p>
                                <input type="password" className="form-control" value={inputPasswordConfirmation}
                                       onChange={({target: {value}}) => setInputPasswordConfirmation(value)}/>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="form-control btnLogin text-light" value="Signup"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;