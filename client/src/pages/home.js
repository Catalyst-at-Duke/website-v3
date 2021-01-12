import React from "react";
import { About } from ".";
import { Where } from ".";
import { SideBar } from "components/sidebar";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
            <SideBar />
          </div>
          <AnchorLink
            className="arrow-down"
            style={{ opacity: "80%" }}
            href="#about"
          />
        </div>
        <About />
        <Where />
      </div>
    );
  }
}
