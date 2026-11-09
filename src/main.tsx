import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/doto/wght.css";
import "@fontsource-variable/archivo/wght.css";
import "./index.css";
import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
