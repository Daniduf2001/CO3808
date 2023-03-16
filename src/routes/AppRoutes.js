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


const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/login" render={(props) => <Login/>}/>;
                    <Route path="/signup" render={(props) => <Signup/>}/>;
                    <Route path="/reset" render={(props) => <Reset/>}/>;
                    <Route path="/welcome" render={(props) => <Welcome/>}/>;
                    <Route path="/teacher" render={(props) => <TeacherRegister/>}/>;
                    <Route path="/student" render={(props) => <StudentRegister/>}/>;
                    <Route path='/admin/:path?' exact>
                        <AdminLayout class="wrapper">
                            <Header/>
                            <Sidebar/>
                            <Switch>
                                <Route path="/admin" render={(props) => <Dashboard/>} exact/>;
                                {/*<Route path="/admin/package" render={(props) => <Package/>}/>;*/}
                                {/*<Route path="/admin/client" render={(props) => <Client/>}/>;*/}
                                {/*<Route path="/admin/ride" render={(props) => <Ride/>}/>;*/}
                                {/*<Route path="/admin/career" render={(props) => <Career/>}/>;*/}
                                {/*<Route path="/admin/careerlist" render={(props) => <CareerList/>}/>;*/}
                            </Switch>
                        </AdminLayout>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};
export default AppRoutes;
