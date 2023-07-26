import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App serverIP="172.16.2.119" serverPort={5173} />
  </React.StrictMode>
);
