import React from 'react';
import './sidebar.css';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/adminTeacher">
                    <span className="icon"><i className="fa fa-tachometer" aria-hidden="true"/></span>
                    <span className="title">Dashboard</span>
                </Link></li>
                <li><Link to="/">
                    <span className="icon"><i className="fa-solid fa-book" aria-hidden="true"></i></span>
                    <span className="title">Module materials</span>
                </Link></li>
                <li><Link to="/">
                    <span className="icon"><i className="fa-solid fa-pen-to-square"></i></span>
                    <span className="title">Assignment</span>
                </Link></li>
                <li><Link to="adminTeacher/timeTable">
                    <span className="icon"><i className="fa-solid fa-calendar-days"></i></span>
                    <span className="title">Class time table</span>
                </Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;