import './welcome.css'
import {Link, useLocation} from "react-router-dom";

function Welcome() {
    let location = useLocation();
    const userDetails = location.state.user;
    return (
        <div className="h-100 welcomeMainDiv">
            <div className="container-fluid px-5 pt-5 welcomeDiv h-100">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="col-12 mb-3">
                            <h4 className="fw-bold"> LearnNow</h4>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-5 ms-lg-5 ms-sm-0">
                        <h4 className="fw-bold">Register as:</h4>
                    </div>
                </div>

                <div className="row mt-5 d-flex justify-content-around align-items-center">
                    <Link to="/student" state={{user: userDetails}}
                          className="col-4 text-white text-decoration-none d-flex flex-column justify-content-around align-items-center">
                        <div className="col-4 avtarSqDiv mb-4">

                        </div>
                        <h4> Student</h4>
                    </Link>

                    <Link to="/teacher" state={{user: userDetails}}
                          className="col-4 text-white text-decoration-none d-flex flex-column justify-content-around align-items-center">
                        <div className="col-4 avtarSqDiv mb-4">

                        </div>
                        <h4> teacher</h4>
                    </Link>

                    <p className="mt-5">Student: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                        accusantium ad aut dolor explicabo,
                        illum ipsa ipsam laudantium maxime modi nemo nisi non obcaecati perferendis possimus quasi,
                        quibusdam reprehenderit vitae.</p>

                    <p className="mt-3">Teacher:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
                        ad aut dolor explicabo,
                        illum ipsa ipsam laudantium maxime modi nemo nisi non obcaecati perferendis possimus quasi,
                        quibusdam reprehenderit vitae.</p>
                </div>

            </div>
        </div>
    );
}

export default Welcome;