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
        className="transition"
        style={{
          background: this.state.color,
          display: "flex",
          height: "auto !important",
        }}
      >
        <ReactBootstrap.Navbar
          fixed="top"
          sticky="top"
          expand="lg"
          style={{ display: "flex", width: "100%" }}
        >
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
              onClick={() => this.props.changeColor(colors.purple)}
            >
              <Link to="/members">members</Link>
            </ReactBootstrap.Nav>
            <ReactBootstrap.Nav
              className="p-2"
              style={{ color: colors.white, fontSize: fonts.size.small }}
              onClick={() => this.props.changeColor(colors.pink)}
            >
              <Link to="/recruitment">recruitment</Link>
            </ReactBootstrap.Nav>
            <ReactBootstrap.Nav
              className="p-2"
              style={{ color: colors.white, fontSize: fonts.size.small }}
              onClick={() => this.props.changeColor(colors.yellow)}
            >
              <Link to="/faq">faq</Link>
            </ReactBootstrap.Nav>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      </div>
    );
  }
}
