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
        <div style={{ fontSize: fonts.size.normal }}>Long name exampleeeee</div>
        <div
          style={{
            fontSize: fonts.size.normal,
            fontWeight: fonts.weights.light,
          }}
        >
          Alumni Relations Chair
        </div>
      </div>
    );
  }
}
