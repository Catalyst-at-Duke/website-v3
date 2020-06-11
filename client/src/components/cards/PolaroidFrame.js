import React from "react";
import { colors, fonts } from "../../styles/theme.js";
import "./cards.css";
import Tape from "../../images/tape.png";

export default class PolaroidFrame extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div class="tape" style={{ background: `url(${Tape})` }} />
        <div class="polaroid-outer" style={{ backgroundColor: colors.white }}>
          <div
            class="polaroid-inner"
            style={{ backgroundColor: colors.black }}
          ></div>
          <div style={{ fontSize: fonts.size.normal }}>Nathan Ostrowski</div>
          <div
            style={{
              fontSize: fonts.size.normal,
              fontWeight: fonts.weights.light,
            }}
          >
            President
          </div>
        </div>
      </div>
    );
  }
}
