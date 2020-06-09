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
            <div className="container">
              <div className="glitch" data-text="CATALYST">
                CATALYST
              </div>
              <div className="glow">CATALYST</div>
            </div>
            <div
              className="sidebar"
              style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                top: 0,
                justifyContent: "center",
                marginLeft: 25,
                height: "100%",
                opacity: "80%",
              }}
            >
              <a
                href="mailto:dukecatalyst@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={"./mail.png"}
                  style={{ width: "50px", marginBottom: 30 }}
                />
              </a>
              <a
                href="https://www.facebook.com/dukecatalyst/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={"./facebook.png"}
                  style={{ width: "50px", marginBottom: 30 }}
                />
              </a>
              <a
                href="https://instagram.com/dukecatalyst"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={"./instagram.png"}
                  style={{ width: "50px", marginBottom: 30 }}
                />
              </a>
              <a
                href="https://linkedin.com/company/duke-catalyst"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={"./linkedin.png"} style={{ width: "50px" }} />
              </a>
            </div>
          </div>
          <div className="arrow-down" style={{ opacity: "80%" }}></div>
        </div>
      </div>
    );
  }
}
