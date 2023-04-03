import React, {useState} from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import {NavLink} from 'react-router-dom';

const URL = process.env.REACT_APP_BACKEND_URL;
const Login = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [error, setError] = useState('');

    const Submit = (e) => {
        e.preventDefault();

        Axios.post(`${URL}/users/login`, {
            email: inputEmail, password: inputPassword,
        })
            .then((res) => {
                const token = new Cookies();
                token.set('token', res.data.token, {path: '/', maxAge: 604800});
                //return to home page
                window.location = '/';
            })
            .catch(() => setError('Something went wrong. Please try again.'));
    };

    return (<div className="text-white px-0 m-0 loginDiv">
        <div className="col-lg-6">
            <div className="col-lg-12 mt-5 ps-5 pt-3">
                <h4 className="fw-bold">LearnNow</h4>
                <h2 className="fw-bold">Welcome to LearnNow</h2>
                <h6 className="fw-bold">Sign in to continue</h6>
                <div className="col-lg-12 col-md-12 col-sm-12  d-flex justify-content-end">
                    <img
                        src={require('../assets/images/Capture.png')}
                        alt="" height="200"/>
                </div>
                <div className="col-lg-12 col-sm-12 col-md-12 pl-0 mt-3">
                    <p>
                        Learning mode more convenient, faster and better
                    </p>
                </div>
                <div className="lineBrake pl-0 mt-3"/>
                <div className="col-12 col-sm-12 col-md-12 col-lg-7 mt-3  pl-0 text-justify">
                    <p>
                        Learn Now is a learning platform that helps you learn more effectively and
                        efficiently.
                    </p>
                </div>
                <div className="col-12 pl-0">
                    <p className="mb-0">
                        Are you a new user?Click <a className="text-white"
                                                    href="/register">here</a> to
                        register
                    </p>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="mt-5 d-flex flex-column justify-content-center align-items-center signInSDiv">
                <div className="text-center mb-2 pt-4">
                    <h1>Sign In</h1>
                </div>
                <div className="px-4 pb-5">
                    <form className="margin text-white" onSubmit={Submit}>
                        <h4 className="form-error">{error}</h4>
                        <div className="form-group">
                            <p className="form-label">Email:</p>
                            <input
                                type="email"
                                className="form-control"
                                value={inputEmail}
                                onChange={({target: {value}}) => setInputEmail(value)}
                            />
                        </div>
                        <div className="form-group">
                            <p className="form-label">Password:</p>
                            <input
                                type="password"
                                className="form-control"
                                value={inputPassword}
                                onChange={({target: {value}}) => setInputPassword(value)}
                            />
                        </div>
                        <div className="form-group">
                            <p className="form-label">
                                Forgot Password  {' '}
                                <NavLink to="/reset" className="text-light">
                                    Reset
                                </NavLink>
                            </p>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="form-control btn btnLogin text-light" value="Login"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>);
};

export default Login;
