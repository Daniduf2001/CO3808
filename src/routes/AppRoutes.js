import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StudentRegister from "../pages/student/register/studentRegister";
import TeacherRegister from "../pages/teacher/register/teacherRegister";
import Login from '../pages/login/login'
import Signup from '../pages/signup/signup'
import Reset from '../pages/resetPassword/resetPassword'
import Welcome from '../pages/welcome/welcome'
import Dashboard from "../pages/admin/dashboard/dashboard";
import Header from "../components/admin/common/header/Header";
import Sidebar from "../components/admin/common/sidebar/Sidebar";
import AdminLayout from "../layout/adminLayout";
import Module from "../pages/admin/module/Module";
import Assignment from "../pages/admin/assinment/Assignment";


const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" render={(props) => <Login/>}/>;
                    <Route exact path="/signup" render={(props) => <Signup/>}/>;
                    <Route exact path="/reset" render={(props) => <Reset/>}/>;
                    <Route exact path="/welcome" render={(props) => <Welcome/>}/>;
                    <Route exact path="/teacher" render={(props) => <TeacherRegister/>}/>;
                    <Route exact path="/student" render={(props) => <StudentRegister/>}/>;
                    <Route path='/teacherAdmin/:path?' exact>
                        <AdminLayout class="wrapper">
                            <Header/>
                            <Sidebar/>
                            <Switch>
                                <Route path="/teacherAdmin" render={(props) => <Dashboard/>} exact/>;
                                <Route path="/teacherAdmin/module" render={(props) => <Module/>} exact/>;
                                <Route path="/teacherAdmin/assignment" render={(props) => <Assignment/>} exact/>;
                            </Switch>
                        </AdminLayout>
                    </Route>

                    <Route path='/studentAdmin/:path?' exact>
                        <AdminLayout class="wrapper">
                            <Header/>
                            <Sidebar/>
                            <Switch>
                            </Switch>
                        </AdminLayout>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};
export default AppRoutes;
