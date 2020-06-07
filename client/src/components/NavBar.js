import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "../styles.css";

import CatalystLogo from "../images/logoNoTextNoBack.png";

export default class NavBarComponent extends React.Component {
  render() {
    return (
      <div flex-direction="row">
        <ReactBootstrap.Navbar fixed="top" sticky="top" expand="lg">
          <ReactBootstrap.Navbar.Brand href="/">
            <img src={CatalystLogo} alt={"logo"} height="50px" width="50px" />
          </ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Nav class="d-flex justify-content-end">
            <ReactBootstrap.Nav.Link class="mr-auto p-2" href="/members">
              members
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link class="mr-auto p-2" href="/recruitment">
              recruitment
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link class="mr-auto p-2" href="/faq">
              faq
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      </div>
    );
  }
}
