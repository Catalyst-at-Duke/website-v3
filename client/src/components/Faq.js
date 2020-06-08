import React from "react";
import classNames from "classnames";
import "../styles/styles.css";
import { colors, fonts } from "../styles/theme.js";

export default class FaqComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="home-body" style={{ backgroundColor: colors.yellow }}>
          This will be the FAQ page
        </div>
      </div>
    );
  }
}
