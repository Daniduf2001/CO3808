import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../pages/login/login'

const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/login" render={(props) => <Login/>}/>;
                </Switch>
            </Router>
        </div>
    );
};
export default AppRoutes;
