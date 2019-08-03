import React from "react";
import Form from "./components/Form";

import "./scss/App.scss";

function App() {
    const appComp = (
        <div className="app container">
            <Form />
        </div>
    );

    return appComp;
}

export default App;
