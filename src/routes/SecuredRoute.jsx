import React from "react";
import {Redirect, Route} from "react-router-dom";

const authentication = {
    isLoggedIn: true,
    onAuthentication() {
        this.isLoggedIn = true;
    },
    getLogInStatus() {
        return this.isLoggedIn;
    },
};

export function SecuredRoute(props) {
    return (
        <Route
            path={props.path}
            render={(data) =>
                authentication.getLogInStatus() ? (
                    <props.component {...data}></props.component>
                ) : (
                    <Redirect to={{pathname: "/"}}></Redirect>
                )
            }
        ></Route>
    );
}
