import React from "react";
import Form from "./components/Form";

import "./scss/App.scss";

/**
 *App component puts in the root element in index.html
 *
 * @returns
 */
function App() {
    const appComp = (
        <div className="app container">
            <Form />
        </div>
    );

    return appComp;
}

export default App;
