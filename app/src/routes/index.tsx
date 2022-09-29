import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

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
                    <Route path="/login" exact/>
                    <Route>
                        <Redirect to={isAuth ? '/dashboard' : '/login'}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
