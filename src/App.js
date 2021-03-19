import "./App.css";
import React from "react";
import {BrowserRouter as Router,} from "react-router-dom";
import {RoutesConfig} from "./routes/RoutesConfig";
import {AppHeader} from "./components/AppHeader";

function App() {
    return (
        <Router>
            <AppHeader/>
            <RoutesConfig/>
        </Router>
    );
}


export default App;
