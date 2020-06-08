import React from "react";
import Switch from "react-switch";
import classNames from "classnames";
import { colors, fonts } from "./theme.js";
// import * as ReactBootstrap from 'react-bootstrap';
import "./styles.css";

import CatalystLogo from "./images/logoNoTextNoBack.png";

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="home-body" style={{ backgroundColor: colors.darkGray }}>
          <div className="catalyst-logo-text">
            <img src={CatalystLogo} alt={"logo"} />
            <div style={{ top: "50%", left: "50%" }}>
              <div class="glitch" data-text="CATALYST"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
