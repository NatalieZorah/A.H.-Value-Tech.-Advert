import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/abstracts/colors.css";
import "./styles/abstracts/fonts.css";
import "./styles/abstracts/layouts.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
