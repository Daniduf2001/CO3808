import React from 'react';
import './sidebar.css';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (<div className="sidebar">
        <ul>
            <li><Link to="/teacherAdmin/">
                <span className="icon"><i className="fa fa-tachometer" aria-hidden="true"/></span>
                <span className="title">Dashboard</span>
            </Link></li>
            <li><Link to="/teacherAdmin/module">
                <span className="icon"><i className="fa-solid fa-book" aria-hidden="true"></i></span>
                <span className="title">Class Work</span>
            </Link></li>
            <li><Link to="/teacherAdmin/assignment">
                <span className="icon"><i className="fa-solid fa-pen-to-square"></i></span>
                <span className="title">People</span>
            </Link></li>
            <li><Link to="/teacherAdmin/timeTable">
                <span className="icon"><i className="fa-solid fa-calendar-days"></i></span>
                <span className="title">Settings</span>
            </Link></li>
        </ul>
    </div>);
}

export default Sidebar;