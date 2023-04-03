import './resetPassword.css'

function ResetPassword() {
    return (
        <div>
            <div className="container-fluid px-5 pt-5 resetDiv">
                <div>
                    <div className="col-lg-6">
                        <div className="col-12 mb-3">
                            <h4 className="fw-bold"> LearnNow</h4>
                        </div>
                        <div className="col-12">
                            <h1 className="fw-bold">Forgot your</h1>
                            <h1 className="fw-bold">Password?</h1>
                        </div>
                        <div className="col-12 mt-3 mb-5">
                            <h6 className=" fw-bold">Create a New Password &nbsp;</h6>
                            <div className="lineBrake  pl-0 mt-3 mb-3"/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-12 pl-0">
                            <div className="col-12 mt-5">
                                <p>
                                    As you click on that Send button, you will receive an email to
                                    <br/>confirm your new password.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mt-3">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="pb-5">
                                    <div className="col-sm-12 col-md-6 col-lg-9">
                                        <div className="resetDivMainDiv col-lg-12 m-auto">
                                            <div className="text-center mb-2 pt-4">
                                                <h1 className="fw-bold">Reset Password</h1>
                                            </div>
                                            <div className="px-4 pb-5">
                                                <form action="">
                                                    <div className="form-group mt-3 mb-3">
                                                        <label className="mb-2" htmlFor="email">Email</label>
                                                        <input type="email" className="form-control" id="email"
                                                               placeholder="Enter email"/>
                                                    </div>
                                                    <div className="form-group mt-3 mb-3">
                                                        <label className="mb-2" htmlFor="password">New Password</label>
                                                        <input type="password" className="form-control" id="password"
                                                               placeholder="Password"/>
                                                    </div>
                                                    <div className="form-group mt-3 mb-3">
                                                        <label className="mb-2" htmlFor="password">Confirm New
                                                            Password</label>
                                                        <input type="password" className="form-control" id="password"
                                                               placeholder="Confirm New Password"/>
                                                    </div>
                                                    <div
                                                        className="mt-3 mb-3 form-group form-check d-flex justify-content-center align-items-center">
                                                        <div
                                                            className="col-12 d-flex flex-column justify-content-center align-items-center">
                                                            <button type="submit"
                                                                    className="btn text-white col-6 btnSend mt-2">Send
                                                            </button>
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
                </div>
            </div>
        </div>);
}

export default ResetPassword;