import './welcome.css'
import {Link} from "react-router-dom";
import studentImage from "../../assets/images/student.png";
import teacherImage from "../../assets/images/teacher.png";

function Welcome() {
    return (
        <div className="h-100 welcomeMainDiv">
            <div className="container-fluid px-5 pt-5 welcomeDiv h-100">
                <div>
                    <div className="col-lg-6">
                        <div className="col-12 mb-3">
                            <h4 className="fw-bold"> LearnNow</h4>
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <div className="col-12 ms-sm-0">
                        <h4 className="fw-bold ms-lg-5">Register as:</h4>
                    </div>
                </div>

                <div className="row mt-4 d-flex justify-content-around align-items-center">
                    <Link to={{
                        pathname: "/student"
                    }}
                          className="col-4 text-white text-decoration-none d-flex flex-column justify-content-around align-items-center">
                        <div className="col-4 avtarSqDiv mb-4">
                            <img src={studentImage} alt="studnet icon"/>
                        </div>
                        <h4> Student</h4>
                    </Link>

                    <Link to={{
                        pathname: "/teacher"
                    }}
                          className="col-4 text-white text-decoration-none d-flex flex-column justify-content-around align-items-center">
                        <div className="col-4 avtarSqDiv mb-4">
                            <img src={teacherImage} alt="teacher icon"/>
                        </div>
                        <h4>Teacher</h4>
                    </Link>

                    <p className="mt-5">Student: This user type will allow you access to multiple features such as
                        managing your modules and assignments, being able to keep track of deadlines, google calendar
                        and classroom. </p>

                    <p className="mt-3">Teacher: This user type will enable you to save and drop information that
                        students can access for further knowledge, keep track of their ongoing classes, google
                        calendar.</p>
                </div>

            </div>
        </div>
    );
}

export default Welcome;