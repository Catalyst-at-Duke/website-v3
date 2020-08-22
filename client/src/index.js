import React from "react";
import ReactDOM from "react-dom";

import { Faq, Home, Exec, Members, Recruitment } from "pages";
import { NavBar } from "components/navbar";
import Firebase, { FirebaseContext } from "components/Firebase";

import * as serviceWorker from "serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { colors } from "styles/theme.js";
import "styles/styles.css";
import "index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

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
              <Route path="/exec" component={Exec} />
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
