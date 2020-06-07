import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./home";
import Members from "./components/Members";
import Faq from "./components/Faq";
import Recruitment from "./components/Recruitment";
import * as serviceWorker from "./serviceWorker";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Router>
      <Home path="/" />
      <Members path="members" />
      <Recruitment path="recruitment" />
      <Faq path="faq" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
