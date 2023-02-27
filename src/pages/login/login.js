import './login.css'
import backGroundSmallImage from '../../assets/images/Capture.png';

function Login() {
    return (<div>
        <div className="container-fluid px-5 pt-5 loginDiv">
            <div className="row">
                <div className="col-12 mb-3">
                    <h4> LearnNow</h4>
                </div>
                <div className="col-12">
                    <h1>Welcome to LearnNow</h1>
                </div>
                <div className="col-12">
                    <h6> Sign in to continue</h6>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="row signContentDiv pb-4">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 pl-0">
                            <div className="col-12 d-flex justify-content-end align-items-center">
                                <img
                                    src={backGroundSmallImage}
                                    alt="" height="200"/>
                            </div>
                            <div className="col-12  pl-0 mt-3">
                                <p>
                                    Learning mode more convenient, faster and better
                                </p>
                            </div>
                            <div className="lineBrake  pl-0 mt-3 mb-3"/>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-7 mt-3  pl-0 text-justify">
                                <p>
                                    Learn Now is a learning platform that helps you learn more effectively and
                                    efficiently.
                                </p>
                            </div>
                            <div className="col-12  pl-0 mt-4">
                                <p>
                                    Are you a new user?Click <u>here</u> to register
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="signInDiv col-lg-8 m-auto">
                                <div className="text-center mb-2 pt-4">
                                    <h1>Sign In</h1>
                                </div>
                                <div className="px-4 pb-5">
                                    <form action="">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email"
                                                   placeholder="Enter email"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" id="password"
                                                   placeholder="Password"/>
                                        </div>
                                        <div className="form-group form-check pl-0 ml-0">
                                            <label className="form-check-label" htmlFor="forgot">Forgot
                                                Password? Click</label>&nbsp;&nbsp;
                                            <a id="forgot" href="#">here</a>
                                        </div>

                                        <div
                                            className="form-group form-check d-flex justify-content-center align-items-center">
                                            <div
                                                className="col-12 d-flex flex-column justify-content-center align-items-center">
                                                <button type="submit"
                                                        className="btn text-white col-5 btnLogin mb-2">Submit
                                                </button>

                                                <p className="mb-1">OR</p>

                                                <div
                                                    className="btnGoogle text-center text-dark d-flex
                                                        justify-content-center align-items-center mt-2">
                                                    <i className="fa-brands fa-google" aria-hidden="true"></i>
                                                </div>

                                                <p className="mt-2">Sign in with Google</p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Login;