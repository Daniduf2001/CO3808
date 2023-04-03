import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';

const client_id =
    '561451932929-76r1j1chglg5opgdpjql5u9eofn2h2mt.apps.googleusercontent.com';

const URL = process.env.REACT_APP_BACKEND_URL;

function TimeTable(props) {

    useEffect(() => {
        Axios.get(`${URL}/calendar/event/all`).then((response) => {
            setEventDetails(response.data);
        });
        // setEventDetailsToCalender();
    }, []);

    const [summary, setSummary] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [startDateTime, setStartDateTime] = useState('');
    const [endDateTime, setEndDateTime] = useState('');
    const [eventDetails, setEventDetails] = useState([]);

    const events = [
        {title: "Programming", start: new Date("2023-04-04T21:00:00+05:30")},
        {title: "Distributed system", start: new Date("2023-04-25T21:00:00+05:30")},
        {title: "Programming", start: new Date("2023-04-04T21:00:00+05:30")},
        {title: "Distributed system", start: new Date("2023-05-12T21:30:00+05:30")},
        {title: "Programming", start: new Date("2023-05-11T21:30:00+05:30")},
    ];

    // const setEventDetailsToCalender = () => {
    //     eventDetails.map((event) => {
    //         events.push({title: event.summary, start: event.start.dateTime});
    //     });
    // };


    return (
        <div className="container main_container">
            <div className="item">
                <h1 className="text-center">Assignment Schedule</h1>
            </div>
            <div className="container ms-2">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    weekends={true}
                    events={events}
                    eventContent={renderEventContent}
                />
            </div>
        </div>
    );

    // a custom render function
    function renderEventContent(eventInfo) {
        return (
            <div className="col text-center">
                <p className="fw-bold">{eventInfo.event.title}</p>
                <p>{eventInfo.timeText}</p>
            </div>
        );
    }
}

export default TimeTable;
