import React, { useState } from "react";

const SideBar = () => {
  const [isHovered, setHovered] = useState(null);
  return (
    <div
      className="sidebar"
      style={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        justifyContent: "center",
        marginLeft: 25,
        height: "100%",
        zIndex: "100",
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
          onMouseEnter={() => {
            setHovered("mail");
          }}
          onMouseLeave={() => {
            setHovered(null);
          }}
          style={{
            width: "50px",
            marginBottom: 30,
            opacity: isHovered === "mail" ? "100%" : "50%",
            transition: "opacity .1s",
          }}
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
          onMouseEnter={() => {
            setHovered("fb");
          }}
          onMouseLeave={() => {
            setHovered(null);
          }}
          style={{
            width: "50px",
            marginBottom: 30,
            opacity: isHovered === "fb" ? "100%" : "50%",
            transition: "opacity .1s",
          }}
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
          onMouseEnter={() => {
            setHovered("insta");
          }}
          onMouseLeave={() => {
            setHovered(null);
          }}
          style={{
            width: "50px",
            marginBottom: 30,
            opacity: isHovered === "insta" ? "100%" : "50%",
            transition: "opacity .1s",
          }}
        />
      </a>
      <a
        href="https://linkedin.com/company/duke-catalyst"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="visit Catalyst's LinkedIn page"
          onMouseEnter={() => {
            setHovered("linkedin");
          }}
          onMouseLeave={() => {
            setHovered(null);
          }}
          src={"./linkedin.png"}
          style={{
            width: "50px",
            marginBottom: 30,
            opacity: isHovered === "linkedin" ? "100%" : "50%",
            transition: "opacity .1s",
          }}
        />
      </a>
    </div>
  );
};

export default SideBar;
