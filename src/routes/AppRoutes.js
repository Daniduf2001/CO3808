import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../pages/login/login'
import Signup from '../pages/signup/signup'
import Reset from '../pages/resetPassword/resetPassword'

const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" render={(props) => <Login/>}/>;
                    <Route path="/signup" render={(props) => <Signup/>}/>;
                    <Route path="/reset" render={(props) => <Reset/>}/>;
                </Switch>
            </Router>
        </div>
    );
};
export default AppRoutes;
