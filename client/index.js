import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";

//import your styles
import styles from "./scss/application.scss";


const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
