import './welcome.css'

function Welcome() {
    return (
        <div>
            <div className="container-fluid px-5 pt-5 welcomeDiv">
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
                    <div className="col-4  d-flex flex-column justify-content-around align-items-center">
                        <div className="col-4 avtarSqDiv mb-4">

                        </div>
                        <h4> Student</h4>
                    </div>

                    <div className="col-4  d-flex flex-column justify-content-around align-items-center">
                        <div className="col-4 avtarSqDiv mb-4">

                        </div>
                        <h4> Student</h4>
                    </div>

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