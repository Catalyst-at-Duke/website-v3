import React from "react";
import ReactDOM from "react-dom";

import { Faq, Home, Members, NavBar, Recruitment } from "./components/app";
import Firebase, { FirebaseContext } from "./components/firebase";

import * as serviceWorker from "./serviceWorker";
import { Location, Router } from "@reach/router";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { colors } from "./styles/theme.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarColor: colors.darkGray,
    };
  }

  render() {
    return (
      <React.StrictMode>
        <FirebaseContext.Provider value={new Firebase()}>
          <Switch>
            <div>
              <NavBar location={window.location.pathname} />
              <Route exact path="/" component={Home} />
              <Route path="/members" component={Members} />
              <Route path="/recruitment" component={Recruitment} />
              <Route path="/faq" component={Faq} />
            </div>
          </Switch>
        </FirebaseContext.Provider>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
