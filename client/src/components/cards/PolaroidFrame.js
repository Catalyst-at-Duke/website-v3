import React from "react";
import { colors, fonts } from "../../styles/theme.js";
import "./cards.css";
import * as ReactBootstrap from "react-bootstrap";

export default class PolaroidFrame extends React.Component {
  render() {
    return (
      <div class="polaroid-outer" style={{ backgroundColor: colors.white }}>
        <div
          class="polaroid-inner"
          style={{ backgroundColor: colors.black }}
        ></div>
      </div>
    );
  }
}
