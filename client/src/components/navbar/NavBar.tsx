import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import "./utils";

import { colors, fonts } from "styles/theme.js";
import "styles/styles.css";
import "./style.less";
import { getColor } from "./utils";

interface PublicProps {
  url: string;
}

const NavBar = (props: PublicProps) => {
  const [color, setColor] = useState(getColor(window.location.pathname));

  const changeColor = (color: any) => {
    console.log(color);
    setColor(color);
  };

  return (
    <div className="app" style={{ background: color, display: "flex" }}>
      <ReactBootstrap.Navbar
        style={{
          display: "flex",
          width: "100%",
          position: "fixed",
          zIndex: 99,
        }}
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
              fontWeight: "bold",
              marginTop: "50px",
            }}
            onClick={() => changeColor(colors.black)}
          >
            home
          </ReactBootstrap.NavLink>
          <ReactBootstrap.NavDropdown
            onClick={() => {
              window.location.replace("/exec");
            }}
            className="p-2"
            id="members-nav"
            renderMenuOnMount={true}
            style={{
              marginTop: "42px",
            }}
            title={
              <span
                style={{
                  color: colors.white,
                  fontSize: fonts.size.normal,
                  fontWeight: "bold",
                }}
              >
                people
              </span>
            }
          >
            <ReactBootstrap.NavDropdown.Item href="/exec">
              exec
            </ReactBootstrap.NavDropdown.Item>
            <ReactBootstrap.NavDropdown.Item href="/members">
              members
            </ReactBootstrap.NavDropdown.Item>
          </ReactBootstrap.NavDropdown>
          <ReactBootstrap.NavLink
            className="p-2"
            href="/recruitment"
            style={{
              color: colors.white,
              fontSize: fonts.size.normal,
              fontWeight: "bold",
              marginTop: "50px",
            }}
            onClick={() => changeColor(colors.pink)}
          >
            recruitment
          </ReactBootstrap.NavLink>
          <ReactBootstrap.NavLink
            className="p-2"
            href="/faq"
            style={{
              color: colors.white,
              fontSize: fonts.size.normal,
              fontWeight: "bold",
              marginTop: "50px",
            }}
            onClick={() => changeColor(colors.yellow)}
          >
            faq
          </ReactBootstrap.NavLink>
          <ReactBootstrap.Navbar.Brand href="https://catahub.ue.r.appspot.com/home">
            <img
              src={require("../../images/profileIcon.png")}
              width="30px"
              height="30px"
              className="d-inline-block"
              alt="Catahub"
              style={{
                marginTop: "51px",
                marginLeft: "8px",
              }}
            />
          </ReactBootstrap.Navbar.Brand>
        </ReactBootstrap.Nav>
      </ReactBootstrap.Navbar>
    </div>
  );
};

export default NavBar;
