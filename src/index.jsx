import React from "react";
import ReactDom from "react-dom/client";
import App from "../src/components/App.jsx";

import { HashRouter } from "react-router-dom";
import "./scss/footer.scss";
import "./scss/header.scss";
import "./scss/google-style.scss";
import "./scss/menuComponent.scss";
import "./scss/aboutBar.scss";
const rootEl = document.getElementById("root");
const rootInstance = ReactDom.createRoot(rootEl);

rootInstance.render(
  <HashRouter>
    <App />
  </HashRouter>
);
