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
        onMouseLeave={() => message && setIsHovered(false)}
        onMouseEnter={() => message && setIsHovered(true)}
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
        <div style={{ fontSize: fonts.size.normal, fontWeight: "bold" }}>
          {name}
        </div>
        <div
          style={{
            fontSize: fonts.size.small,
            fontWeight: "lighter",
          }}
        >
          {position}
        </div>
      </div>
    </div>
  );
};

export default PolaroidFrame;
