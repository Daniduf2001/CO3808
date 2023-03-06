import './signup.css'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreator} from "../../store/actions";
import VueSweetalert2 from "sweetalert2";

function Signup() {
    const user = useSelector((state) => state.userReducer.user);
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const {saveUser,} = bindActionCreators(actionCreator, dispatch);

    const signUp = (e) => {
        e.preventDefault();
        const newUser = {
            UserName: user.UserName,
            UserEmail: user.UserEmail,
            Password: user.Password,
            DOB: user.DOB
        }
        saveUser(newUser).then((res) => {
            if (res.payload.status === 200) {
                VueSweetalert2.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    icon: 'success',
                    title: res.payload.data.message
                });
                setTimeout(() => {
                    navigation("/welcome", {state: {user: res.payload.data.data}});
                }, 2000);
            }
        }).catch((err) => {
            VueSweetalert2.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'error',
                title: err.response.data.message
            });
        });
    }


    return (
        <div>
            <div className="container-fluid px-5 pt-5 signUpDiv">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="col-12 mb-3">
                            <h4 className="fw-bold"> LearnNow</h4>
                        </div>
                        <div className="col-12">
                            <h1 className="fw-bold">Create a</h1>
                            <h1 className="fw-bold">New Account</h1>
                        </div>
                        <div className="col-12 mt-3 mb-5">
                            <h6 className="d-inline-block fw-bold">Already Registered? &nbsp;</h6>
                            <Link className="d-inline-block fw-bold text-white" to="/"> Login </Link>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-12 pl-0">
                            <div className="col-12 mt-5">
                                <p>
                                    Sign up and start your e-learning journey today!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row mt-3">
                            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="row signContentDiv pb-5">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-9">
                                        <div className="signUpMainDiv col-lg-12 m-auto">
                                            <div className="text-center mb-2 pt-4">
                                                <h1 className="fw-bold">Sign Up</h1>
                                            </div>
                                            <div className="px-4 pb-5">
                                                <form onSubmit={signUp}>
                                                    <div className="form-group mt-3 mb-3">
                                                        <label className="mb-2" htmlFor="name">Name</label>
                                                        <input type="text" className="form-control" id="name"
                                                               placeholder="Name"
                                                               onChange={(e) => {
                                                                   user.UserName = e.target.value
                                                               }}
                                                        />
                                                    </div>
                                                    <div className="form-group mt-3 mb-3">
                                                        <label className="mb-2" htmlFor="email">Email</label>
                                                        <input type="email" className="form-control" id="email"
                                                               placeholder="Enter email" onChange={(e) => {
                                                            user.UserEmail = e.target.value
                                                        }}/>
                                                    </div>
                                                    <div className="form-group mt-3 mb-3">
                                                        <label className="mb-2" htmlFor="password">Password</label>
                                                        <input type="password" className="form-control" id="password"
                                                               placeholder="Password" onChange={(e) => {
                                                            user.Password = e.target.value
                                                        }}/>
                                                    </div>
                                                    <div className="form-group mt-3 mb-3">
                                                        <label className="mb-2" htmlFor="dOb">Date of birth</label>
                                                        <input type="text" className="form-control" id="dOb"
                                                               placeholder="Date of Birth"
                                                               onFocus={(e) => e.target.type = 'date'}
                                                               onChange={(e) => {
                                                                   user.DOB = e.target.value
                                                               }}
                                                        />
                                                    </div>
                                                    <div
                                                        className="mt-3 mb-3 form-group form-check d-flex justify-content-center align-items-center">
                                                        <div
                                                            className="col-12 d-flex flex-column justify-content-center align-items-center">
                                                            <button type="submit"
                                                                    className="btn text-white col-6 btnSignup mt-2">Sign
                                                                Up
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

export default Signup;