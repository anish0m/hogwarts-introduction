import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(React.createElement(App));
