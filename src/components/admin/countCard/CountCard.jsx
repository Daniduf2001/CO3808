import React from "react";
import './countcard.css';

const CountCard = (props) => {
    return (
        <div className="card col-2 countCard">
            <div className="card-body d-flex justify-content-center align-items-center">
                <div className="col-6">
                    <i className={`count-Icon ${props.icon}`}></i>
                </div>
                <div className="col-6">
                    <h5 className="card-title fw-bold">{props.title}</h5>
                    <h6 className="card-subtitle pt-2 mb-2 text-muted">{props.subtitle}</h6>
                </div>
            </div>
        </div>
    );
}

export default CountCard;