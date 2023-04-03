import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Archived from './components/Class/archived.component';
import Class from './components/Class/class.component';
import Classwork from './components/Class/classwork.component';
import JoinClass from './components/Class/join_class.component';
import People from './components/Class/people.component';
import ClassSetting from './components/Class/setting.component';
import Checkbox from './components/Classwork/checkbox.classwork';
import LongAnswer from './components/Classwork/long-answer.classwork';
import Material from './components/Classwork/material.classwork';
import MultipleChoice from './components/Classwork/multiple-choice.classwork';
import ShortAnswer from './components/Classwork/short-asnwer.classwork';
import ZeroFourZero from './components/Error/404.component';
import Home from './components/home.component';
import Login from './components/login.component';
import Logout from './components/logout.component';
import EditProfile from './components/Profile/edit_profile.component';
import Profile from './components/Profile/profile.component';
import Register from './components/register.component';
import TeacherRegister from "./components/teacher/register/teacherRegister";
import StudentRegister from "./components/student/register/studentRegister";
import Welcome from "./pages/welcome/welcome";
import Dashboard from "./components/dashboard/dashboard";
import AdminLayout from "./layout/adminLayout";
import Header from "./components/admin/common/header/Header";
import Sidebar from "./components/admin/common/sidebar/Sidebar";
import TimeTable from "./pages/timeTable/TimeTable";
import ResetPassword from "./pages/resetPassword/resetPassword";

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/reset" component={ResetPassword}/>
            <Route path="/teacher" component={TeacherRegister}/>
            <Route path="/student" component={StudentRegister}/>
            <Route path="/welcome" component={Welcome}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/profile/edit" component={EditProfile}/>
            <Route path="/profile" component={Profile}/>}
            <Route path="/archived" component={Archived}/>
            <Route path="/class/join" component={JoinClass}/>
            <Route path="/class/:classId/c/:classworkId" component={Checkbox}/>
            <Route path="/class/:classId/mc/:classworkId" component={MultipleChoice}/>
            <Route path="/class/:classId/la/:classworkId" component={LongAnswer}/>
            <Route path="/class/:classId/sa/:classworkId" component={ShortAnswer}/>
            <Route path="/class/:classId/m/:materialId" component={Material}/>
            <Route path="/class/:classId/classwork" component={Classwork}/>
            <Route path="/class/:classId/setting" component={ClassSetting}/>
            <Route path="/class/:classId/people" component={People}/>
            <Route path="/class/:classId" component={Class}/>
            <Route path='/adminTeacher/:path?'>
                <AdminLayout class="wrapper">
                    <Header/>
                    <Sidebar/>
                    <Switch>
                        <Route path="/adminTeacher" render={(props) => <Dashboard/>} exact/>;
                        <Route path="/adminTeacher/profile" render={(props) => <Profile userType={true}/>} exact/>
                        <Route path="/adminTeacher/timeTable" render={(props) => <TimeTable/>} exact/>
                        {/*<Route path="/adminTeacher" component={Dashboard} exact/>;*/}
                        {/*<Route path="/admin/package" render={(props) => <Package/>}/>;*/}
                        {/*<Route path="/admin/client" render={(props) => <Client/>}/>;*/}
                        {/*<Route path="/admin/ride" render={(props) => <Ride/>}/>;*/}
                        {/*<Route path="/admin/career" render={(props) => <Career/>}/>;*/}
                        {/*<Route path="/admin/careerlist" render={(props) => <CareerList/>}/>;*/}
                    </Switch>
                </AdminLayout>
            </Route>
            <Route path="*" component={ZeroFourZero}/>
        </Switch>
    </Router>
);

export default App;
