import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/styles.css";
import { colors, fonts } from "../styles/theme.js";

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
        return colors.black;
    }
  };

  render() {
    return (
      <div
        className="app"
        style={{ background: this.state.color, display: "flex" }}
      >
        <ReactBootstrap.Navbar
          fixed="top"
          sticky="top"
          expand="lg"
          style={{ display: "flex", width: "100%" }}
        >
          <ReactBootstrap.Nav
            className="d-flex flex-row m-4"
            style={{
              position: "absolute",
              right: 0,
              marginRight: "10px",
              opacity: "50%",
            }}
          >
            <ReactBootstrap.NavLink
              className="p-2"
              href="/"
              style={{
                color: colors.white,
                fontSize: fonts.size.normal,
                fontWeight: fonts.weights.bold,
              }}
              onClick={() => this.props.changeColor(colors.black)}
              activeClassName="navbar__link--active"
            >
              home
            </ReactBootstrap.NavLink>
            <ReactBootstrap.NavLink
              className="p-2"
              href="/members"
              style={{
                color: colors.white,
                fontSize: fonts.size.normal,
                fontWeight: fonts.weights.bold,
              }}
              onClick={() => this.props.changeColor(colors.purple)}
              activeClassName="navbar__link--active"
            >
              members
            </ReactBootstrap.NavLink>
            <ReactBootstrap.NavLink
              className="p-2"
              href="/recruitment"
              style={{
                color: colors.white,
                fontSize: fonts.size.normal,
                fontWeight: fonts.weights.bold,
              }}
              onClick={() => this.props.changeColor(colors.pink)}
              activeClassName="navbar__link--active"
            >
              recruitment
            </ReactBootstrap.NavLink>
            <ReactBootstrap.NavLink
              className="p-2"
              href="/faq"
              style={{
                color: colors.white,
                fontSize: fonts.size.normal,
                fontWeight: fonts.weights.bold,
              }}
              onClick={() => this.props.changeColor(colors.yellow)}
              activeClassName="navbar__link--active"
            >
              faq
            </ReactBootstrap.NavLink>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      </div>
    );
  }
}
