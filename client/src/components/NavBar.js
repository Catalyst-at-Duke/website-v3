import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "../styles.css";
import { colors, fonts } from "../theme.js";

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
      <div flex-direction="row" style={{ background: this.state.color }}>
        <ReactBootstrap.Navbar fixed="top" sticky="top" expand="lg">
          <ReactBootstrap.Navbar.Brand href="/">
            <img src={CatalystLogo} alt={"logo"} height="50px" width="50px" />
          </ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Nav class="d-flex">
            <ReactBootstrap.Nav.Link
              className="justify-content-end p-2"
              href="/members"
              style={{ color: colors.white, fontSize: fonts.size.small }}
              onClick={() => this.props.changeColor(colors.purple)}
            >
              members
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link
              className="justify-content-end p-2"
              href="/recruitment"
              style={{ color: colors.white, fontSize: fonts.size.small }}
              onClick={() => this.props.changeColor(colors.pink)}
            >
              recruitment
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link
              className="justify-content-end p-2"
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
