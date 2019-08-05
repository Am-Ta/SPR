import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Banner from "./components/layout/Banner";

import "./scss/App.scss";

/**
 *App component puts in the root element in index.html
 *
 * @returns
 */
function App() {
    const appComp = (
        <Router>
            <div className="app">
                <div className="container">
                    <Route exact path="/" component={Banner} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/signin" component={Signin} />
                </div>
            </div>
        </Router>
    );

    return appComp;
}

export default App;
