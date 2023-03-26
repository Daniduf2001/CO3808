import './login.css'
import backGroundSmallImage from '../../assets/images/Capture.png';
import {Link, useHistory} from "react-router-dom";
import {GoogleLogin} from 'react-google-login';
import axios from "axios";
import VueSweetalert2 from "sweetalert2";

const clientID = "790749371562-klboqah1p5gvj9fr937ohf6hfqtamhtg.apps.googleusercontent.com";

function Login() {

    const history = useHistory();
    const onSuccess = (res) => {
        // history.push("/teacherAdmin");
        console.log("Login success! current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed! current user: ", res);
    }

    const checkLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/aouth", {
            UserEmail: e.target.email.value,
            Password: e.target.password.value
        }).then((res) => {
            console.log(res);
            if (res.status === 200 && res.data.userType === "teacher") {
                history.push("/teacherAdmin", {state: {user: res.data.data}});
            } else if (res.status === 200 && res.data.userType === "student") {
                history.push("/studentAdmin", {state: {user: res.data.data}});
            } else {
                VueSweetalert2.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    icon: 'error',
                    title: "Something went wrong"
                });
            }
        }).catch((err) => {
            VueSweetalert2.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'error',
                title: "Something went wrong"
            });
        });
    }


    return (
        <div className="row text-white px-0 m-0 loginDiv">
            <div className="col-lg-6">
                <div className="col-lg-12 mt-5 ps-5 pt-3">
                    <h4 className="fw-bold">LearnNow</h4>
                    <h2 className="fw-bold">Welcome to LearnNow</h2>
                    <h6 className="fw-bold">Sign in to continue</h6>
                    <div className="col-lg-12 col-md-12 col-sm-12  d-flex justify-content-end">
                        <img
                            src={backGroundSmallImage}
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
                            Are you a new user?Click <Link className="text-white"
                                                           to="/signup">here</Link> to
                            register
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="d-flex flex-column justify-content-center align-items-center signInSDiv">
                    <div className="text-center mb-2 pt-4">
                        <h1>Sign In</h1>
                    </div>
                    <div className="px-4 pb-5">
                        <form onSubmit={checkLogin}>
                            <div className="form-group">
                                <label htmlFor="email" className="mb-2">Email</label>
                                <input type="email" className="form-control mt-3" id="email"
                                       placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="mb-2 mt-2">Password</label>
                                <input type="password" className="form-control mt-1" id="password"
                                       placeholder="Password"/>
                            </div>
                            <div className="form-group form-check pl-0 ml-0">
                                <label className="form-check-label mb-2 mt-2" htmlFor="forgot">Forgot
                                    Password? Click</label>&nbsp;&nbsp;
                                <Link id="forgot" to="/reset">here</Link>
                            </div>

                            <div
                                className="form-group form-check d-flex justify-content-center align-items-center">
                                <div
                                    className="col-12 d-flex flex-column justify-content-center align-items-center">
                                    <button type="submit"
                                            className="btn text-white col-5 btnLogin mb-2">Submit
                                    </button>

                                    <p className="mb-1">OR</p>

                                    <div>
                                        <GoogleLogin
                                            clientId={clientID}
                                            cookiePolicy={'single_host_origin'}
                                            isSignedIn={true}
                                            onSuccess={onSuccess}
                                            onFailure={onFailure}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;