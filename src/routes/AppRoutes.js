import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Login from '../pages/login/login'
// import Signup from '../pages/signup/signup'
// import Reset from '../pages/resetPassword/resetPassword'
// import Welcome from '../pages/welcome/welcome'
import StudentRegister from "../pages/student/register/studentRegister";

const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    {/*<Route exact path="/" render={(props) => <Login/>}/>;*/}
                    {/*<Route exact path="/signup" render={(props) => <Signup/>}/>;*/}
                    {/*<Route exact path="/reset" render={(props) => <Reset/>}/>;*/}
                    {/*<Route exact path="/welcome" render={(props) => <Welcome/>}/>;*/}
                    <Route exact path="/student" render={(props) => <StudentRegister/>}/>;
                </Switch>
            </Router>
        </div>
    );
};
export default AppRoutes;
