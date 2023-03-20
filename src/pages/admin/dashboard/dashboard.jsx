import React from "react";
import './dashboard.css';
import CountCard from "../../../components/admin/countCard/CountCard";

const Dashboard = () => {
    return (
        <div className="main_container">
            <div className="item">
                <div className="d-flex justify-content-between">
                    <CountCard icon="fas fa-user" title="Total Student" subtitle="100"/>
                    <CountCard icon="fa-solid fa-book" title="Total Modules" subtitle="100"/>
                    <CountCard icon="fa-solid fa-pen-to-square" title="Total Assignment" subtitle="100"/>
                </div>
            </div>
            <div className="item">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi
                reprehenderit minima blanditiis eum quae aspernatur!
            </div>
            <div className="item">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi
                reprehenderit minima blanditiis eum quae aspernatur!
            </div>
        </div>
    );
};

export default Dashboard;