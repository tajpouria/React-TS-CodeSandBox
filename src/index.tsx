import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

import CounterErrorBoundaryExample from "./CounterErrorBoundaryExample";

function App() {
    return <CounterErrorBoundaryExample />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
