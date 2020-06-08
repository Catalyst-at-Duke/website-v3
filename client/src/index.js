import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./home";
import Members from "./components/Members";
import Faq from "./components/Faq";
import Recruitment from "./components/Recruitment";
import * as serviceWorker from "./serviceWorker";
import { Location, Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { colors, fonts } from "./theme.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarColor: colors.darkGray,
    };
  }

  changeColor = (color) => {
    this.setState({ color: color });
  };

  render() {
    return (
      <React.StrictMode>
        <Location>
          {({ location }) => (
            <TransitionGroup>
              <CSSTransition timeout={300} key={location.key} classNames="fade">
                <div>
                  <NavBar
                    location={location.pathname}
                    changeColor={this.changeColor}
                  />
                  <Router location={location}>
                    <Home path="/" />
                    <Members path="members" />
                    <Recruitment path="recruitment" />
                    <Faq path="faq" />
                  </Router>
                </div>
              </CSSTransition>
            </TransitionGroup>
          )}
        </Location>
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
