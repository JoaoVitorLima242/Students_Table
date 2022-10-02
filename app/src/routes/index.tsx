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
import { AddStudent } from "../pages/AddStudent";
// Pages
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import StudentDetails from "../pages/StudentDetails";

type PrivateRoutesProps = {
    component: React.ElementType
    exact: boolean
    path: string
}

const Routes = () => {
    const isAuth = isAuthenticated()

    const PrivateRoute = ({ component: Component, exact, path}: PrivateRoutesProps) => (
        <Route
            exact={exact}
            path={path}
            render={(props) =>
                isAuth ? (
                    <Component {...props}/>
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
                    <PrivateRoute exact component={Dashboard} path='/dashboard'/>
                    <PrivateRoute exact component={AddStudent} path='/add-student'/>
                    <PrivateRoute exact component={StudentDetails} path='/student/:id'/>
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