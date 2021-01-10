import React from "react";
import { About } from ".";
import { Where } from ".";

import { colors } from "styles/theme.js";
import CatalystLogo from "images/logoNoTextNoBack.png";
import "styles/styles.css";
import "styles/glitch.scss";

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
                opacity: "50%",
              }}
            >
              <a
                href="mailto:dukecatalyst@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="email Catalyst"
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
                  alt="visit Catalyst's Facebook page"
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
                  alt="visit Catalyst's Instagram page"
                  src={"./instagram.png"}
                  style={{ width: "50px", marginBottom: 30 }}
                />
              </a>
              <a
                href="https://linkedin.com/company/duke-catalyst"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="visit Catalyst's LinkedIn page"
                  src={"./linkedin.png"}
                  style={{ width: "50px" }}
                />
              </a>
            </div>
          </div>
          <div className="arrow-down" style={{ opacity: "80%" }}></div>
        </div>
        <About></About>
        <Where></Where>
      </div>
    );
  }
}
