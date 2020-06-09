import React from "react";
import Switch from "react-switch";
import classNames from "classnames";
import { colors, fonts } from "./styles/theme.js";
// import * as ReactBootstrap from 'react-bootstrap';
import "./styles/styles.css";
import "./styles/glitch.scss";

import CatalystLogo from "./images/logoNoTextNoBack.png";

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <div
          className="body"
          style={{ backgroundColor: colors.black, justifyContent: "center" }}
        >
          <div className="catalyst-logo-text">
            <img src={CatalystLogo} alt={"logo"} />
            <div class="container">
              <div class="glitch" data-text="CATALYST">
                CATALYST
              </div>
              <div class="glow">CATALYST</div>
            </div>
          </div>
          <div class="arrow-down"></div>
        </div>
      </div>
    );
  }
}
