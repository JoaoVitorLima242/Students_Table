import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

// Helpers
import { isAuthenticated } from "../helpers/cookies";
// Pages
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

type PrivateRoutesProps = {
    component: React.ElementType
    activeMenu
    exact: boolean
    path: string
}

const Routes = () => {
    const isAuth = false

    const PrivateRoute = ({ component: Component, activeMenu, exact, path}: PrivateRoutesProps) => (
        <Route
            exact={exact}
            path={path}
            render={(props) =>
                isAuthenticated() ? (
                    <Component {...props} activeMenu={activeMenu}/>
                ) : (
                    <Redirect
                        to={{ pathname: "/login", state: { from: props.location } }}
                    />
                )
            }
        />
    );

    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoute exact component={Dashboard} path='/dashboard' activeMenu='dashboard'/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/signup" exact component={SignUp}/>
                    <Route>
                        <Redirect to={isAuth ? '/dashboard' : '/login'}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Routes