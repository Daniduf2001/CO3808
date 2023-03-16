import React from 'react';
import './dashboard.css'
import CountCard from "../../../components/admin/countCard/CountCard";

const Dashboard = () => {
    return (
        <div>
            <div className="main_container">
                <div className="item">
                    <div className="d-flex justify-content-start">
                        <CountCard icon="fa-solid fa-user-injured" title="Total Patient" subtitle="100"/>
                        <CountCard icon="fa-solid fa-user-doctor" title="Total Doctors" subtitle="100"/>
                        <CountCard icon="fa-solid fa-house-chimney" title="Total Wards" subtitle="100"/>
                        <CountCard icon="fa-solid fa-flask-vial" title="Total Labs" subtitle="100"/>
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
                <div className="item">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sapiente adipisci nemo atque eligendi
                    reprehenderit minima blanditiis eum quae aspernatur!
                </div>
            </div>
        </div>
    );
};
export default Dashboard;