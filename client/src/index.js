import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./home";
import { Faq, Members } from "./components/app";
import Recruitment from "./components/app/Recruitment";
import NavBar from "./components/app/NavBar";
import * as serviceWorker from "./serviceWorker";
import { Location, Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { colors } from "./styles/theme.js";

import Firebase, { FirebaseContext } from "./components/Firebase";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarColor: colors.darkGray,
    };
  }

  changeColor = (color) => {
    console.log("changed color");
    this.setState({ color: color });
  };

  render() {
    return (
      <React.StrictMode>
        <FirebaseContext.Provider value={new Firebase()}>
          <Location>
            {({ location }) => (
              <div>
                <NavBar location={location.pathname} />
                <Router>
                  <Home path="/" />
                  <Members path="members" />
                  <Recruitment path="recruitment" />
                  <Faq path="faq" />
                </Router>
              </div>
            )}
          </Location>
        </FirebaseContext.Provider>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
