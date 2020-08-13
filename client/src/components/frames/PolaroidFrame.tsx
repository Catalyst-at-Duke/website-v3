import React, { useState } from "react";
import { colors, fonts } from "../../styles/theme.js";
import "./style.css";
// import Tape from "../../images/tape.png";

export interface PublicProps {
  message: string;
  name: string;
  photo: string;
  position: string;
}

const PolaroidFrame = (props: PublicProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const { message, name, photo, position } = props;
  return (
    <div>
      {/* <div style={{ background: `url(${Tape})` }}></div> */}
      <div
        className="polaroid-outer"
        style={{ backgroundColor: colors.white }}
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
      >
        <div className="polaroid-inner">
          <img
            alt="Catalyst member"
            style={{
              backgroundColor: colors.black,
              width: "200px",
              height: "190px",
              objectFit: "cover",
            }}
            src={photo}
          />
        </div>
        <div style={{ fontSize: fonts.size.normal }}>{name}</div>
        <div
          style={{
            fontSize: fonts.size.normal,
            fontWeight: "lighter",
          }}
        >
          {position}
        </div>

        <div
          style={{
            position: "absolute",
            width: "230px",
            overflow: "auto",
            height: "280px",
            backgroundColor: colors.white,
            padding: "5px",
            transition: "opacity .2s",
            opacity: isHovered ? "95%" : "0%",
          }}
        >
          {message}
        </div>
      </div>
    </div>
  );
};

export default PolaroidFrame;
