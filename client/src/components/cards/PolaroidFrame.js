import React from "react";
import { colors, fonts } from "../../styles/theme.js";
import "./cards.css";
import * as ReactBootstrap from "react-bootstrap";

export default class PolaroidFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }
  render() {
    return (
      <div
        className="polaroid-outer"
        style={{ backgroundColor: colors.white }}
        onMouseLeave={() => this.setState({ hovered: false })}
        onMouseEnter={() => this.setState({ hovered: true })}
      >
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

        <div
          style={{
            position: "absolute",
            width: "230px",
            overflow: "auto",
            height: "280px",
            backgroundColor: colors.white,
            padding: "5px",
            transition: "opacity .2s",
            opacity: this.state.hovered ? "95%" : "0%",
          }}
        >
          {this.props.message}
        </div>
      </div>
    );
  }
}
