import React from "react";
import { colors, fonts } from "../../styles/theme.js";
import "./cards.css";
import * as ReactBootstrap from "react-bootstrap";

export default class PolaroidFrame extends React.Component {
  render() {
    return (
      <div className="polaroid-outer" style={{ backgroundColor: colors.white }}>
        <div className="polaroid-inner">
          <img
            style={{
              backgroundColor: colors.black,
              width: "200px",
              height: "190px",
              objectFit: "cover",
            }}
            src={this.props.photo}
          />
        </div>
        <div style={{ fontSize: fonts.size.normal }}>{this.props.name}</div>
        <div
          style={{
            fontSize: fonts.size.normal,
            fontWeight: fonts.weights.light,
          }}
        >
          {this.props.position}
        </div>
      </div>
    );
  }
}
