import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "../styles.css";
import { colors, fonts } from "../theme.js";
import { Link } from "@reach/router";

import "../styles.css";
import CatalystLogo from "../images/logoNoTextNoBack.png";

export default class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.getColor(),
    };
  }

  getColor = () => {
    switch (this.props.location) {
      case "/faq":
        return colors.yellow;
      case "/recruitment":
        return colors.pink;
      case "/members":
        return colors.purple;
      default:
        return colors.darkGray;
    }
  };

  render() {
    return (
      <div
        className="transition page"
        style={{
          background: this.props.color,
          position: "absolute",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <ReactBootstrap.Navbar>
          <ReactBootstrap.Navbar.Brand>
            <Link to="/">
              <img src={CatalystLogo} alt={"logo"} height="50px" width="50px" />
            </Link>
          </ReactBootstrap.Navbar.Brand>

          <ReactBootstrap.Nav
            className="d-flex flex-row"
            style={{ position: "absolute", right: 0, marginRight: "10px" }}
          >
            <ReactBootstrap.Nav
              className="p-2"
              style={{ color: colors.white, fontSize: fonts.size.small }}
            >
              <Link to="members">members</Link>
            </ReactBootstrap.Nav>
            <ReactBootstrap.Nav
              className="p-2"
              style={{ color: colors.white, fontSize: fonts.size.small }}
            >
              <Link to="recruitment">recruitment</Link>
            </ReactBootstrap.Nav>
            <ReactBootstrap.Nav
              className="p-2"
              style={{ color: colors.white, fontSize: fonts.size.small }}
            >
              <Link to="faq">faq</Link>
            </ReactBootstrap.Nav>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      </div>
    );
  }
}
