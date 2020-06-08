import React from "react";
import classNames from "classnames";
import "../styles.css";
import { colors, fonts } from "../theme.js";

export default class FaqComponent extends React.Component {
  render() {
    return (
      <div className="app transition" style={{ background: colors.yellow }}>
        <div className="home-body">This will be the FAQ page</div>
      </div>
    );
  }
}
