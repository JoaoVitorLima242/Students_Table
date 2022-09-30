import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

// Pages
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Routes = () => {
    const isAuth = false

    // const PrivateRoute = ({ component: Component, ...rest }) => (
    //     <Route
    //         {...rest}
    //         render={(props) =>
    //             isAuthenticated() ? (
    //                 <Component {...props} activeMenu={rest.activeMenu}/>
    //             ) : (
    //                 <Redirect
    //                     to={{ pathname: "/login", state: { from: props.location } }}
    //                 />
    //             )
    //         }
    //     />
    // );

    return (
        <Router>
            <div>
                <Switch>
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