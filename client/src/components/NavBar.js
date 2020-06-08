import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/styles.css";
import { colors, fonts } from "../styles/theme.js";

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
      <div style={{ background: this.state.color, display: "flex" }}>
        <ReactBootstrap.Navbar
          fixed="top"
          sticky="top"
          expand="lg"
          style={{ display: "flex", width: "100%" }}
        >
          <ReactBootstrap.Navbar.Brand href="/">
            <img
              src={CatalystLogo}
              alt={"logo"}
              class="ml-2"
              height="50px"
              width="50px"
            />
          </ReactBootstrap.Navbar.Brand>

          <ReactBootstrap.Nav
            className="d-flex flex-row"
            style={{ position: "absolute", right: 0, marginRight: "10px" }}
          >
            <ReactBootstrap.Nav.Link
              className="p-2"
              href="/members"
              style={{ color: colors.white, fontSize: fonts.size.small }}
              onClick={() => this.props.changeColor(colors.purple)}
            >
              members
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link
              className="p-2"
              href="/recruitment"
              style={{ color: colors.white, fontSize: fonts.size.small }}
              onClick={() => this.props.changeColor(colors.pink)}
            >
              recruitment
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link
              className="p-2"
              href="/faq"
              style={{ color: colors.white, fontSize: fonts.size.small }}
              onClick={() => this.props.changeColor(colors.yellow)}
            >
              faq
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      </div>
    );
  }
}
