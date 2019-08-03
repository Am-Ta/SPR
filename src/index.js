import React from "react";
import ReactDOM from "react-dom";

function App() {
    const appComp = (
        <div className="app">
            <h1>Hello World</h1>
        </div>
    );

    return appComp;
}

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
