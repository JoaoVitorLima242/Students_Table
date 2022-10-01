import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Navbar from "../components/Navbar";

// Helpers
import { isAuthenticated } from "../helpers/cookies";
// Pages
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

type PrivateRoutesProps = {
    component: React.ElementType
    activeMenu: string
    exact: boolean
    path: string
}

const Routes = () => {
    const isAuth = isAuthenticated()

    const PrivateRoute = ({ component: Component, activeMenu, exact, path}: PrivateRoutesProps) => (
        <Route
            exact={exact}
            path={path}
            render={(props) =>
                isAuth ? (
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
                {isAuth && <Navbar />}
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