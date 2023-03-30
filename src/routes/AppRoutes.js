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
import StudentHeader from "../components/admin/common/header/Header";
import StudentSidebar from "../components/admin/common/sidebar/Sidebar";
import Sidebar from "../components/admin/common/sidebar/Sidebar";
import AdminLayout from "../layout/adminLayout";
import ClassPage from "../pages/admin/clssspage/classPage";
import ClassWork from "../pages/admin/classwork/ClassWork";
import Material from "../components/admin/Classwork/material.classwork";
import Checkbox from "../components/admin/Classwork/checkbox.classwork";
import ShortAnswer from "../components/admin/Classwork/short-asnwer.classwork";
import LongAnswer from "../components/admin/Classwork/long-answer.classwork";
import JoinClass from "../components/admin/Class/join_class.component";
import People from "../components/admin/Class/people.component";
import ClassSetting from "../components/admin/Class/setting.component";
import ArchivedComponent from "../components/admin/Class/archived.component";
import Profile from "../components/admin/Profile/profile.component";
import EditProfile from "../components/admin/Profile/edit_profile.component";


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
                                <Route path="/teacherAdmin/people/" render={(props) => <People/>}/>
                                <Route path="/teacherAdmin/class/" render={(props) => <ClassPage/>} exact/>;
                                <Route path="/teacherAdmin/classwork/" render={(props) => <ClassWork/>} exact/>;
                                <Route path="/teacherAdmin/m/" render={(props) => <Material/>} exact/>
                                <Route path="/teacherAdmin/mc/" render={(props) => <Material/>} exact/>
                                <Route path="/teacherAdmin/c/" render={(props) => <Checkbox/>} exact/>
                                <Route path="/teacherAdmin/sa/" render={(props) => <ShortAnswer/>} exact/>
                                <Route path="/teacherAdmin/la/" render={(props) => <LongAnswer/>} exact/>
                                <Route path="/teacherAdmin/join/" render={(props) => <JoinClass/>} exact/>
                                <Route path="/teacherAdmin/setting/" render={(props) => <ClassSetting/>} exact/>
                                <Route path="/teacherAdmin/archived/" render={(props) => <ArchivedComponent/>} exact/>
                                <Route path="/teacherAdmin/profile/" render={(props) => <Profile/>} exact/>
                                <Route path="/teacherAdmin/UserProfile/edit" render={(props) => <EditProfile/>} exact/>
                            </Switch>
                        </AdminLayout>
                    </Route>

                    <Route path='/studentAdmin/:path?' exact>
                        <AdminLayout class="wrapper">
                            <StudentHeader/>
                            <StudentSidebar/>
                            <Switch>
                                <Route path="/studentAdmin" render={(props) => <Dashboard/>} exact/>;
                            </Switch>
                        </AdminLayout>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};
export default AppRoutes;
