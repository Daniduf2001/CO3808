import './login.css'
import backGroundSmallImage from '../../assets/images/Capture.png';
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="container-fluid loginDiv">
            <div className="container">
                <div className="col-lg-12 col-sm-12 col-md-12">
                    <h5 className="fw-bold mt-4">LearnNow</h5>
                </div>
                <div className="col-lg-12 col-sm-12 col-md-12">
                    <h1 className="mt-5 fw-bold">Welcome to LearnNow</h1>
                </div>
                <div className="col-lg-12 col-sm-12 col-md-12">
                    <h6 className="mt-5 fw-bold">Sign in to continue</h6>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12  d-flex justify-content-end">
                        <img
                            src={backGroundSmallImage}
                            alt="" height="200"/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-end">
                        <img
                            src={backGroundSmallImage}
                            alt="" height="200"/>
                    </div>
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
        </div>);
}

export default Login;