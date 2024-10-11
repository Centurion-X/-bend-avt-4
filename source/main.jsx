// imports from react libraries
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { StrictMode } from "react";
// imports from project files
import "./index.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render
(
    <StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </StrictMode>,
);