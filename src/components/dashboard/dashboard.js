import React, {useEffect, useState} from 'react';
import './dashboard.css'
import CountCard from "./card/CountCard";
import Axios from "axios";
import Cookies from "universal-cookie";
import UserInfo from "../../Library/UserInfo";

const URL = process.env.REACT_APP_BACKEND_URL;
const Dashboard = () => {

    const [userInfo, setUserInfo] = useState('');
    const [classWork, setClassWork] = useState([]);
    const [classes, setClasses] = useState([]);
    const [studentCount, setStudentCount] = useState(0);

    useEffect(() => {
        const token = new Cookies().get('token');
        UserInfo(token).then((res) => {
            if (res) setUserInfo(res); else window.location = "/login"
        })
    }, [])

    useEffect(() => {

        Axios.get(`${URL}/class/all`).then((res) => {
            setClasses(res.data)
        })

        Axios.get(`${URL}/classwork/all`).then((res) => {
            console.log(res.data)
            setClassWork(res.data)
        })

        Axios.get(`${URL}/users/all`).then((res) => {
            setStudentCount(res.data.length)
        })


        console.log(classes)

    }, []);


    const renderClassList = () => {
        return classes.map((item, index) => {
            return (
                <tr itemScope="row" id={item._id} key={item._id}>
                    <td>
                        {item.title}
                    </td>
                    <td>{item.description}</td>
                </tr>
            )
        })
    }

    const renderClassWorks = () => {
        return classWork.map((item, index) => {
            return (
                <tr itemScope="row" id={item._id} key={item._id}>
                    <td>
                        {item.title}
                    </td>
                    <td>
                        {item.types}
                    </td>
                    <td>{item.description}</td>
                </tr>
            )
        })
    }


    return (
        <div className="container main_container">
            <div className="item">
                <div className="d-flex justify-content-between mb-3 mt-3">
                    <CountCard icon="fa-solid fa-book" title="Total Class" subtitle={classes.length}/>
                    <CountCard icon="fa-solid fa-pen-to-square" title="Total Assignment" subtitle={classWork.length}/>
                    <CountCard icon="fas fa-user" title="Total Student" subtitle={studentCount}/>
                </div>
            </div>
            <div className="item">
                <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                    <div className="col-lg-6 me-2">
                        <div className="card card-body">
                            <div className="table-responsive">
                                <h1 className="text-center">Class Details</h1>
                                <table className="table table-striped custom-table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Class Name</th>
                                        <th scope="col">Description</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        renderClassList()
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ms-2">
                        <div className="card card-body">
                            <div className="table-responsive">
                                <h1 className="text-center">Assignment Details</h1>
                                <table className="table table-striped custom-table">
                                    <thead>
                                    <tr>
                                        <th scope="col">ClassWork</th>
                                        <th scope="col">ClassWork Type</th>
                                        <th scope="col">Description</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        renderClassWorks()
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;