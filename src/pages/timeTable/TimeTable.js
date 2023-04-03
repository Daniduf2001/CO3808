import React, {useEffect, useState} from 'react';
import {GoogleLogin} from "react-google-login";
import Axios from "axios";

const client_id = "561451932929-76r1j1chglg5opgdpjql5u9eofn2h2mt.apps.googleusercontent.com";

const URL = process.env.REACT_APP_BACKEND_URL;

function TimeTable(props) {

    // useEffect(() => {
    //     Axios.get(`${URL}/calendar/google`).then((response) => {
    //         console.log(response);
    //     })
    //
    // }, []);

    // console.log(client_id);

    const [summary, setSummary] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');

    const responseGoogle = (response) => {
        const {code} = response;
        console.log(code);
        Axios.post(`${URL}/users/create-tokens/`, {code}).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    const responseError = (response) => {
        console.log(response)
    };

    const createAssignment = (e) => {
        e.preventDefault();
        Axios.post(`${URL}/users/create/event`, {
            summary,
            description,
            location,
            startDateTime,
            endDateTime
        }).then((res) => {
            console.log(res)
        })
    }

    return (
        <div className="container main_container">
            <div className="item">
                <h1>Google Calendar API</h1>
            </div>
            <div>
                <GoogleLogin clientId={client_id} buttonText="Sign in & Authorize Calendar"
                             onSuccess={responseGoogle}
                             onFailure={responseError}
                             cookiePolicy={'single_host_origin'}
                             responseType="code"
                             accessType="offline"
                             scope="openid email profile https://www.googleapis.com/auth/calendar"
                />
            </div>
        </div>
    );
}

export default TimeTable;