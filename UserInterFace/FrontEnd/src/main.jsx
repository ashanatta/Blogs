import React from "react";
import ReactDOM from "react-dom/client";
import App from "./commponents/App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
