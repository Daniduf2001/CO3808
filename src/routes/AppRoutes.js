import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StudentRegister from "../pages/student/register/studentRegister";
import TeacherRegister from "../pages/teacher/register/teacherRegister";
import Login from '../pages/login/login'
import Signup from '../pages/signup/signup'
import Reset from '../pages/resetPassword/resetPassword'
import Welcome from '../pages/welcome/welcome'


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>;
                <Route exact path="/signup" element={<Signup/>}/>;
                <Route exact path="/reset" element={<Reset/>}/>;
                <Route exact path="/welcome" element={<Welcome/>}/>;
                <Route exact path="/student" element={<StudentRegister/>}/>;
                <Route exact path="/teacher" element={<TeacherRegister/>}/>;
            </Routes>
        </BrowserRouter>
    );
};
export default AppRoutes;
