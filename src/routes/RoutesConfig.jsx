import React from "react";
import {Route, Switch,} from "react-router-dom";
import {SecuredRoute} from "./SecuredRoute";
import {Dashboard} from "../pages/dashboard/Dashboard";
import {Inventory} from "../pages/inventory/Inventory";
import {Tasks} from "../pages/tasks/Tasks";
import {Cars} from "../pages/cars/Cars";

export function RoutesConfig() {
    return (
        <Switch>
            <Route exact path="/"><Dashboard/></Route>
            <SecuredRoute path="/inventory" component={Inventory}></SecuredRoute>
            <SecuredRoute path="/tasks" component={Tasks}></SecuredRoute>
            <SecuredRoute path="/cars" component={Cars}></SecuredRoute>
        </Switch>
    )
}

