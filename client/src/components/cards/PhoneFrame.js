import React from "react";
import { colors, fonts } from "../../styles/theme.js";
import "./cards.css";

export default class PhoneFrame extends React.Component {
  render() {
    return (
      <div class="phone-outer" style={{ backgroundColor: colors.darkGray }}>
        <div class="flex-box" style={{ alignItems: "center", height: "5vh" }}>
          <div
            class="phone-speaker"
            style={{ backgroundColor: colors.gray }}
          ></div>
        </div>
        <div class="flex-box" style={{ height: "87vh" }}>
          <div
            class="phone-inner"
            style={{ backgroundColor: colors.white }}
          ></div>
        </div>
        <div class="flex-box" style={{ alignItems: "center", height: "8vh" }}>
          <div class="phone-dot" style={{ backgroundColor: colors.gray }}></div>
        </div>
      </div>
    );
  }
}
