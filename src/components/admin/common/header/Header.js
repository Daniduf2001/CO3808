import React from "react";
import Cookies from "universal-cookie";
import './header.css';
// import logo from '../../../../assets/logo/logo.svg';
import {Link} from "react-router-dom";

const Header = () => {
    const logout = () => {
        const token = new Cookies()
        token.remove('token');
        window.location = "/";
    }

    return (
        <div className="top_navbar">
            <div className="hamburger">
                <div className="one"/>
                <div className="two"/>
                <div className="three"/>
            </div>
            <div className="col-12 top_menu">
                <div className="col-7  d-flex justify-content-end">
                    {/*<img src={logo} alt=""/>*/}
                </div>
                <div className="col-5 d-flex justify-content-end">
                    <ul className="mb-0">
                        <li className="mt-1 text-decoration-none">
                            <p style={{cursor: "pointer"}} className="d-inline me-2" onClick={logout}><i
                                className="fa fa-sign-out logoutIcon"
                                aria-hidden="true"/></p>
                            <p className="d-inline ms-2 me-2 fw-bold profileText">Madhusha</p>
                        </li>
                        <li>
                            <Link to="/client">
                                <i className="fas fa-user"/>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Header;