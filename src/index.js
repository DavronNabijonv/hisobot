import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import your main React component
import { BrowserRouter } from "react-router-dom";
import "animate.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
