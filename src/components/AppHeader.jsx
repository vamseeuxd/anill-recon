import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import React from "react";

export function AppHeader() {
    return (
        <Navbar className="shadow fixed-top" bg="light" expand="lg">
            <Navbar.Brand><NavLink to=""><h4 className="text-danger">iRecon</h4></NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav><NavLink className="btn btn-link" to="">Dashboard</NavLink></Nav>
                    <Nav><NavLink className="btn btn-link ml-2" to="/inventory">Inventory</NavLink></Nav>
                    <Nav><NavLink className="btn btn-link ml-2" to="/tasks">Tasks</NavLink></Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
