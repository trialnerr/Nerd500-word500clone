import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
//import your styles
import styles from "./scss/application.scss";


const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
