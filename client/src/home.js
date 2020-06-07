import React from "react";
import Switch from "react-switch";
import classNames from "classnames";
import { colors, fonts } from "./theme.js";
// import * as ReactBootstrap from 'react-bootstrap';
import "./styles.css";

import CatalystLogo from "./images/logoNoTextNoBack.png";

export default class HomeComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <div
          className="home-body"
          style={{ backgroundColor: colors.darkGray, color: colors.white }}
        >
          <div className="catalyst-logo-text">
            <img src={CatalystLogo} alt={"logo"} />
            <div className="catalyst-text">
              <TextGlitch word="C A T A L Y S T"></TextGlitch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class TextGlitch extends React.Component {
  render() {
    const letters = this.props.word.split("");

    return (
      <div className="glitch-wrapper" role="p">
        {letters.map((l) =>
          l === " " ? (
            <span className="glitch-letter">&nbsp;</span>
          ) : (
            <div className="glitch-wrapper">
              <span className="glitch-letter" data-text={l}>
                {l}
              </span>
            </div>
          )
        )}
      </div>
    );
  }
}
